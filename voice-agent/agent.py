"""Questy realtime voice tutor: a LiveKit Agents worker.

Pipeline (all streaming): Silero VAD + LiveKit multilingual turn detector -> Sarvam STT
-> Anthropic (Claude) -> Sarvam TTS (bulbul:v3), with preemptive generation and
barge-in. Board ops go to the browser over the data channel (topic "board", the same
JSON op / event schema the smartboard already uses); the browser sends the student's
board work and taps on topic "student".

Run locally:   python agent.py download-files && python agent.py dev
Production:    python agent.py start   (see README.md)
"""

from __future__ import annotations

import asyncio
import base64
import json
import logging
import os
from typing import Any

from dotenv import load_dotenv

from livekit import rtc
from livekit.agents import (
    Agent,
    AgentServer,
    AgentSession,
    ChatMessage,
    JobContext,
    JobProcess,
    RunContext,
    cli,
    function_tool,
    room_io,
)
from livekit.agents.llm import ImageContent
from livekit.plugins import anthropic, sarvam, silero
from livekit.plugins.turn_detector.multilingual import MultilingualModel

from prompt import build_instructions, opening_line

try:  # Krisp noise cancellation: works on LiveKit Cloud (and self-hosted with a licence).
    from livekit.plugins import noise_cancellation
except Exception:  # pragma: no cover - optional
    noise_cancellation = None  # type: ignore[assignment]

load_dotenv(".env.local")
load_dotenv()
logger = logging.getLogger("questy-voice")

AGENT_NAME = os.getenv("AGENT_NAME", "questy-tutor")
# Same model as the browser tutor route (src/lib/tutor/guard.ts TUTOR_MODEL).
ANTHROPIC_MODEL = os.getenv("ANTHROPIC_MODEL", "claude-haiku-5-5")
# saarika:v2.5 is sunset; saaras:v3 in "transcribe" mode is its successor (same task).
SARVAM_STT_MODEL = os.getenv("SARVAM_STT_MODEL", "saaras:v3")
SARVAM_TTS_MODEL = os.getenv("SARVAM_TTS_MODEL", "bulbul:v3")
LANGS = {"en-IN", "hi-IN", "kn-IN"}
SPEAKERS = {"priya", "rahul"}
MAX_OPS = 60
MAX_IMAGE_B64 = 4_500_000

BOARD_TOPIC = "board"
STUDENT_TOPIC = "student"


def _meta(participant: rtc.RemoteParticipant) -> dict[str, Any]:
    try:
        m = json.loads(participant.metadata or "{}")
        return m if isinstance(m, dict) else {}
    except json.JSONDecodeError:
        return {}


class Tutor(Agent):
    def __init__(self, room: rtc.Room, meta: dict[str, Any]) -> None:
        super().__init__(instructions=build_instructions(meta))
        self._room = room

    async def _send(self, event: dict[str, Any]) -> None:
        await self._room.local_participant.publish_data(
            json.dumps(event, ensure_ascii=False), reliable=True, topic=BOARD_TOPIC
        )

    @function_tool(
        raw_schema={
            "name": "draw_on_board",
            "description": (
                "Write or draw on the shared smartboard while you speak. Pass the board ops "
                "(text, math, table, arrow, line, rect, circle, ellipse, polygon, angle, curve, dot, "
                "component, numberline, axes, plot, point, laser, highlight, underline, tick, cross, "
                "ring, explainer, page, clear) exactly as described in the instructions. Call it "
                "AFTER your spoken sentences in the same reply."
            ),
            "parameters": {
                "type": "object",
                "properties": {
                    "ops": {
                        "type": "array",
                        "description": "Board ops in drawing order, e.g. {\"op\":\"math\",\"id\":\"m1\",\"tex\":\"F = ma\"}.",
                        "items": {"type": "object", "properties": {"op": {"type": "string"}}, "required": ["op"]},
                    }
                },
                "required": ["ops"],
            },
        }
    )
    async def draw_on_board(self, raw_arguments: dict[str, Any], context: RunContext) -> None:
        ops = raw_arguments.get("ops")
        if not isinstance(ops, list):
            return None
        ops = [o for o in ops if isinstance(o, dict) and isinstance(o.get("op"), str)][:MAX_OPS]
        if ops:
            await self._send({"t": "board", "ops": ops})
        # None = no follow-up LLM turn, so drawing never adds a round trip.
        return None

    @function_tool(
        raw_schema={
            "name": "lesson_event",
            "description": (
                "Silent lesson-structure event for the app's screen: plan, progress, evaluate, "
                "branch, ask, hint or end (shapes in the instructions). One event per call."
            ),
            "parameters": {
                "type": "object",
                "properties": {
                    "event": {
                        "type": "object",
                        "properties": {
                            "t": {"type": "string", "enum": ["plan", "progress", "evaluate", "branch", "ask", "hint", "end"]}
                        },
                        "required": ["t"],
                    }
                },
                "required": ["event"],
            },
        }
    )
    async def lesson_event(self, raw_arguments: dict[str, Any], context: RunContext) -> None:
        ev = raw_arguments.get("event")
        if isinstance(ev, dict) and ev.get("t") in {"plan", "progress", "evaluate", "branch", "ask", "hint", "end"}:
            await self._send(ev)
        return None


def prewarm(proc: JobProcess) -> None:
    proc.userdata["vad"] = silero.VAD.load(min_silence_duration=0.35)


server = AgentServer(setup_fnc=prewarm)


@server.rtc_session(agent_name=AGENT_NAME)
async def entrypoint(ctx: JobContext) -> None:
    await ctx.connect()
    student = await ctx.wait_for_participant()
    meta = _meta(student)
    lang = meta.get("language") if meta.get("language") in LANGS else "en-IN"
    speaker = meta.get("speaker") if meta.get("speaker") in SPEAKERS else "priya"
    logger.info("session start room=%s lang=%s speaker=%s topic=%s", ctx.room.name, lang, speaker, meta.get("topic"))

    stt = sarvam.STT(language=lang, model=SARVAM_STT_MODEL, mode="transcribe")
    tts = sarvam.TTS(target_language_code=lang, model=SARVAM_TTS_MODEL, speaker=speaker)
    session: AgentSession = AgentSession(
        vad=ctx.proc.userdata["vad"],
        stt=stt,
        llm=anthropic.LLM(model=ANTHROPIC_MODEL, caching="ephemeral", max_tokens=1024, temperature=0.6),
        tts=tts,
        turn_handling={
            "turn_detection": MultilingualModel(),
            "endpointing": {"min_delay": 0.4, "max_delay": 2.5},
            "interruption": {"enabled": True, "min_duration": 0.4, "resume_false_interruption": True},
            "preemptive_generation": {"enabled": True},
        },
        max_tool_steps=3,
    )
    tutor = Tutor(ctx.room, meta)

    @session.on("conversation_item_added")
    def _on_item(ev: Any) -> None:
        # Per-turn latency (end-of-utterance delay, LLM TTFT, TTS TTFB) for tuning.
        item = ev.item
        if isinstance(item, ChatMessage) and item.role == "assistant":
            logger.info("turn metrics %s", item.metrics)

    # ---- the browser -> tutor channel (topic "student") ----
    async def on_student(raw: str) -> None:
        try:
            msg = json.loads(raw)
        except json.JSONDecodeError:
            return
        if not isinstance(msg, dict):
            return
        kind = str(msg.get("t") or "say")[:24]
        text = str(msg.get("text") or "")[:4000]
        if kind == "language":
            new = msg.get("language")
            if new in LANGS:
                # The Sarvam STT plugin only exposes per-stream options; the tutor's voice
                # switches now, and saaras transcribes code-mixed speech well meanwhile.
                tts.update_options(target_language_code=new)
                session.generate_reply(user_input=f"[intent:language] Please continue in {new}.")
            return
        if kind == "stop":
            session.interrupt()
            return
        content: list[Any] = [f"[{kind}] {text}".strip()]
        img = msg.get("image")
        if isinstance(img, str) and 0 < len(img) <= MAX_IMAGE_B64:
            try:
                base64.b64decode(img, validate=True)
                mt = msg.get("mediaType") if msg.get("mediaType") in ("image/png", "image/jpeg") else "image/png"
                content.append(ImageContent(image=f"data:{mt};base64,{img}"))
            except ValueError:
                pass
        session.interrupt()
        session.generate_reply(user_input=ChatMessage(role="user", content=content))

    tasks: set[asyncio.Task[None]] = set()

    def spawn(coro: Any) -> None:
        t = asyncio.create_task(coro)
        tasks.add(t)
        t.add_done_callback(tasks.discard)

    @ctx.room.on("data_received")
    def _on_data(packet: rtc.DataPacket) -> None:
        if packet.topic == STUDENT_TOPIC:
            spawn(on_student(packet.data.decode("utf-8", "ignore")))

    async def _read_stream(reader: rtc.TextStreamReader) -> None:
        await on_student(await reader.read_all())

    # Large payloads (board snapshots) arrive as a text stream on the same topic.
    ctx.room.register_text_stream_handler(STUDENT_TOPIC, lambda reader, _identity: spawn(_read_stream(reader)))

    audio_input: Any = True
    if noise_cancellation is not None:
        try:
            audio_input = room_io.AudioInputOptions(noise_cancellation=noise_cancellation.BVC())
        except Exception as e:  # pragma: no cover
            logger.warning("noise cancellation unavailable: %s", e)

    await session.start(
        agent=tutor,
        room=ctx.room,
        room_options=room_io.RoomOptions(audio_input=audio_input, participant_identity=student.identity),
    )
    session.generate_reply(user_input=opening_line(meta))


if __name__ == "__main__":
    cli.run_app(server)
