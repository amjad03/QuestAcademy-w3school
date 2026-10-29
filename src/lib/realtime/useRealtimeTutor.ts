"use client";

/**
 * Realtime voice tutor over LiveKit (WebRTC): the student's mic goes to the Questy voice
 * agent (voice-agent/), whose audio plays back here with ~1 s turn latency; live captions
 * come from LiveKit transcription streams, the agent's state from its `lk.agent.state`
 * attribute, and board ops arrive on the "board" data topic in the smartboard's own op /
 * event schema. Enabled only when NEXT_PUBLIC_LIVEKIT_URL is set; `start()` resolves false
 * on any failure (5 s timeout) so the caller can fall back to the browser voice path.
 */

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import type { Room, RemoteParticipant, RemoteTrack } from "livekit-client";
import type { SmartboardHandle } from "@/components/board/Smartboard";
import { cleanOp } from "@/components/board/ops";
import { supabase } from "@/lib/supabase";
import { TUTOR_PASS_HEADER } from "@/lib/tutor/live";
import { toEvents, type LiveEvent } from "@/lib/tutor/protocol";
import { BOARD_TOPIC, STUDENT_TOPIC, type RealtimeRequest } from "./metadata";

/** Build-time flag: the realtime path exists only when the LiveKit URL is configured. */
export const realtimeEnabled = () => Boolean(process.env.NEXT_PUBLIC_LIVEKIT_URL);

export const REALTIME_CONNECT_TIMEOUT_MS = 5000;

export type RealtimeStatus = "idle" | "connecting" | "connected" | "failed" | "ended";
export type AgentState = "initializing" | "listening" | "thinking" | "speaking" | "idle";
export type RealtimeLine = { id: string; who: "student" | "tutor"; text: string; final: boolean };
export type RealtimeFailure = "disabled" | "token" | "premium_required" | "rate_limited" | "daily_limit" | "timeout" | "connect" | "mic";

/** Messages the browser sends the agent on the "student" topic. */
export type StudentMessage =
  | { t: "board-work" | "board"; text: string; image?: string; mediaType?: "image/png" | "image/jpeg" }
  | { t: "tap" | "say" | "intent"; text: string }
  | { t: "language"; language: "en-IN" | "hi-IN" | "kn-IN" }
  | { t: "stop" };

const MAX_DATA_BYTES = 12_000;
const TRANSCRIPTION_TOPIC = "lk.transcription";
const STATES: AgentState[] = ["initializing", "listening", "thinking", "speaking", "idle"];

export function useRealtimeTutor(o: { board: RefObject<SmartboardHandle | null>; pass: string | null; onEvent?: (e: LiveEvent) => void }) {
  const [status, setStatus] = useState<RealtimeStatus>("idle");
  const [agentState, setAgentState] = useState<AgentState>("initializing");
  const [lines, setLines] = useState<RealtimeLine[]>([]);
  const [failure, setFailure] = useState<RealtimeFailure | null>(null);
  const [micOn, setMicOn] = useState(true);
  const room = useRef<Room | null>(null);
  const audioEls = useRef<HTMLMediaElement[]>([]);
  const opQueue = useRef<Promise<void>>(Promise.resolve());
  /** Bumped on every start/stop so a connect that lost the 5 s race never lingers. */
  const attempt = useRef(0);
  const opts = useRef(o);
  opts.current = o;

  const cleanup = useCallback(() => {
    attempt.current++;
    for (const el of audioEls.current) el.remove();
    audioEls.current = [];
    const r = room.current;
    room.current = null;
    if (r) void r.disconnect();
  }, []);

  useEffect(() => cleanup, [cleanup]);

  const upsertLine = useCallback((line: RealtimeLine) => {
    setLines((ls) => {
      const i = ls.findIndex((l) => l.id === line.id);
      if (i < 0) return [...ls, line].slice(-200);
      const next = ls.slice();
      next[i] = line;
      return next;
    });
  }, []);

  /** Board ops / lesson events from the agent: ops drawn in order, other events handed to the caller. */
  const onBoardData = useCallback((json: string) => {
    let raw: unknown;
    try {
      raw = JSON.parse(json);
    } catch {
      return;
    }
    for (const e of toEvents(raw)) {
      if (e.t === "board" || e.t === "say") {
        const ops = e.ops.map(cleanOp).filter((x): x is NonNullable<typeof x> => Boolean(x));
        opQueue.current = opQueue.current.then(async () => {
          for (const op of ops) await opts.current.board.current?.apply(op).catch(() => undefined);
        });
      }
      if (e.t === "ask" && e.kind === "board") opts.current.board.current?.setTurn(e.q);
      opts.current.onEvent?.(e);
    }
  }, []);

  const start = useCallback(
    async (req: RealtimeRequest): Promise<boolean> => {
      if (!realtimeEnabled()) {
        setFailure("disabled");
        return false;
      }
      cleanup();
      setLines([]);
      setFailure(null);
      setStatus("connecting");
      setAgentState("initializing");
      const mine = attempt.current;
      const failWith = (f: RealtimeFailure) => {
        cleanup();
        setFailure(f);
        setStatus("failed");
        return false;
      };

      const deadline = new Promise<"timeout">((res) => setTimeout(() => res("timeout"), REALTIME_CONNECT_TIMEOUT_MS));
      const connect = async (): Promise<true | RealtimeFailure> => {
        const h: Record<string, string> = { "Content-Type": "application/json" };
        const token = (await supabase()?.auth.getSession())?.data.session?.access_token;
        if (token) h.Authorization = `Bearer ${token}`;
        if (opts.current.pass) h[TUTOR_PASS_HEADER] = opts.current.pass;
        const res = await fetch("/api/livekit/token", { method: "POST", headers: h, body: JSON.stringify(req) }).catch(() => null);
        if (!res?.ok) {
          const err = (await res?.json().catch(() => null))?.error;
          return err === "premium_required" || err === "rate_limited" || err === "daily_limit" ? err : "token";
        }
        const { url, token: jwt } = (await res.json()) as { url: string; token: string };

        const { Room, RoomEvent, Track } = await import("livekit-client");
        if (attempt.current !== mine) return "timeout";
        const r = new Room({
          adaptiveStream: true,
          dynacast: true,
          audioCaptureDefaults: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
        });
        room.current = r;

        r.on(RoomEvent.TrackSubscribed, (track: RemoteTrack) => {
          if (track.kind !== Track.Kind.Audio) return;
          const el = track.attach();
          el.style.display = "none";
          document.body.appendChild(el);
          audioEls.current.push(el);
        });
        r.on(RoomEvent.TrackUnsubscribed, (track: RemoteTrack) => {
          for (const el of track.detach()) {
            el.remove();
            audioEls.current = audioEls.current.filter((x) => x !== el);
          }
        });
        r.on(RoomEvent.DataReceived, (payload: Uint8Array, _p?: RemoteParticipant, _k?: unknown, topic?: string) => {
          if (topic === BOARD_TOPIC) onBoardData(new TextDecoder().decode(payload));
        });
        r.registerTextStreamHandler(BOARD_TOPIC, async (reader) => onBoardData(await reader.readAll()));
        r.on(RoomEvent.ParticipantAttributesChanged, (changed: Record<string, string>, p) => {
          const st = changed["lk.agent.state"] as AgentState | undefined;
          if (p.isAgent && st && STATES.includes(st)) setAgentState(st);
        });
        r.on(RoomEvent.Disconnected, () => {
          if (room.current === r) {
            room.current = null;
            setStatus("ended");
          }
        });
        // Live captions for both sides: the agent publishes STT (student) and its own speech as text streams.
        r.registerTextStreamHandler(TRANSCRIPTION_TOPIC, async (reader, from) => {
          const attrs = reader.info.attributes ?? {};
          const id = attrs["lk.segment_id"] || reader.info.id;
          const track = attrs["lk.transcribed_track_id"];
          const who: RealtimeLine["who"] = from.identity === r.localParticipant.identity || (track && isStudentTrack(r, track)) ? "student" : "tutor";
          let text = "";
          for await (const chunk of reader) {
            text += chunk;
            upsertLine({ id, who, text, final: false });
          }
          upsertLine({ id, who, text, final: attrs["lk.transcription_final"] !== "false" });
        });

        await r.connect(url, jwt);
        await r.startAudio().catch(() => undefined);
        try {
          await r.localParticipant.setMicrophoneEnabled(true, { echoCancellation: true, noiseSuppression: true, autoGainControl: true });
        } catch {
          return "mic";
        }
        // Wait for the agent to join (explicit dispatch from the token).
        if (![...r.remoteParticipants.values()].some((p) => p.isAgent)) {
          await new Promise<void>((res) => {
            const on = (p: RemoteParticipant) => {
              if (!p.isAgent) return;
              r.off(RoomEvent.ParticipantConnected, on);
              res();
            };
            r.on(RoomEvent.ParticipantConnected, on);
          });
        }
        return true;
      };

      let result: true | RealtimeFailure | "timeout";
      try {
        result = await Promise.race([connect(), deadline]);
      } catch {
        result = "connect";
      }
      if (result !== true) return failWith(result);
      setMicOn(true);
      setStatus("connected");
      return true;
    },
    [cleanup, onBoardData, upsertLine],
  );

  const stop = useCallback(() => {
    cleanup();
    setStatus("ended");
  }, [cleanup]);

  /** Send the agent a message on the "student" topic (data packet, or a text stream when large). */
  const send = useCallback(async (msg: StudentMessage) => {
    const r = room.current;
    if (!r) return false;
    const json = JSON.stringify(msg);
    const bytes = new TextEncoder().encode(json);
    try {
      if (bytes.length <= MAX_DATA_BYTES) await r.localParticipant.publishData(bytes, { reliable: true, topic: STUDENT_TOPIC });
      else await r.localParticipant.sendText(json, { topic: STUDENT_TOPIC });
      return true;
    } catch {
      return false;
    }
  }, []);

  /** Hand the student's board work (snapshot + their marks) to the tutor. */
  const sendBoardWork = useCallback(
    (note = "") => {
      const snap = opts.current.board.current?.snapshot();
      if (!snap) return Promise.resolve(false);
      const text = [note, snap.desc && `On the board: ${snap.desc}`, snap.marks && `My marks: ${snap.marks}`].filter(Boolean).join("\n");
      return send({ t: "board-work", text, image: snap.data, mediaType: snap.mediaType });
    },
    [send],
  );

  const setMic = useCallback(async (on: boolean) => {
    await room.current?.localParticipant.setMicrophoneEnabled(on).catch(() => undefined);
    setMicOn(on);
  }, []);

  const live = lines.at(-1);
  return {
    status,
    agentState,
    lines,
    /** The latest line still being spoken / heard. */
    interim: live && !live.final ? live : null,
    failure,
    micOn,
    start,
    stop,
    send,
    sendBoardWork,
    setMic,
  };
}

/** Was this transcribed track published by the local (student) participant? */
function isStudentTrack(r: Room, trackSid: string) {
  for (const pub of r.localParticipant.trackPublications.values()) if (pub.trackSid === trackSid) return true;
  return false;
}

export type RealtimeTutor = ReturnType<typeof useRealtimeTutor>;
