# Realtime voice tutor (LiveKit + LiveKit Agents)

An optional low-latency voice path for the live tutor. Instead of browser speech
recognition -> `/api/tutor/live` -> TTS one turn at a time, the student talks to a voice
agent over WebRTC:

```
browser mic (echo cancellation, noise suppression, AGC)
  -> LiveKit Cloud (WebRTC)
  -> voice agent (voice-agent/):  Krisp noise cancellation
       -> Silero VAD + LiveKit multilingual turn detector
       -> Sarvam STT (streaming, saaras:v3 "transcribe", en-IN / hi-IN / kn-IN)
       -> Claude via the Anthropic plugin (ANTHROPIC_MODEL, default claude-haiku-5-5)
       -> Sarvam TTS (bulbul:v3, priya / rahul)
  -> agent audio + live captions back to the browser
board: agent --data topic "board"--> smartboard (same op / event JSON as the browser path)
       browser --topic "student"--> agent (board-work snapshots, taps)
```

Preemptive generation (the LLM starts while the turn detector is still deciding) and
barge-in (talk over the tutor to interrupt) are on.

**It is off unless `NEXT_PUBLIC_LIVEKIT_URL` is set.** When it is set, the tutor room first
tries the realtime path; if the token, connection, mic or agent join fails within **5 s**
it falls back automatically to the existing browser voice path. Photo doubts and muted
sessions always use the existing path.

Note: Sarvam's `saarika:v2.5` STT model is sunset; `saaras:v3` in `transcribe` mode is its
successor (same task, plain transcription). Override with `SARVAM_STT_MODEL`.

## What's where

| Path | What |
| --- | --- |
| `voice-agent/agent.py` | LiveKit Agents worker (`AgentSession`, tools `draw_on_board(ops)` and `lesson_event(event)`, data channel) |
| `voice-agent/prompt.py` | System prompt + per-student context, mirroring `src/lib/tutor/live-prompt.ts` |
| `voice-agent/requirements.txt`, `Dockerfile`, `livekit.toml`, `railway.json` | Deploy |
| `src/app/api/livekit/token/route.ts` | Mints a room token (signed-in or rate-limited guest, same premium/daily gates as the tutor) with the student's context as participant metadata, and dispatches the agent |
| `src/lib/realtime/useRealtimeTutor.ts` | Browser hook (`livekit-client`): connect, mic, agent audio, captions, agent state, board channel |
| `src/lib/realtime/metadata.ts`, `RealtimeDock.tsx` | Metadata schema/sanitiser, realtime voice panel |
| `src/components/tutor/live/TutorRoom.tsx` | Integration point (lines marked `[realtime]`) |

## Owner setup

### 1. Create the LiveKit Cloud project

1. Sign up at <https://cloud.livekit.io> and create a project (pick the region closest to
   your students, e.g. Mumbai / India if offered, otherwise Singapore).
2. **Settings -> API keys -> Create key.** Note the three values:
   - URL: `wss://<project-subdomain>.livekit.cloud`
   - API key: `API...`
   - API secret
3. Install the LiveKit CLI and log in:
   ```bash
   brew install livekit-cli            # macOS; Linux: curl -sSL https://get.livekit.io/cli | bash
   lk cloud auth                       # opens the browser, links the CLI to the project
   ```

### 2. Add the keys to Vercel

Vercel -> the project -> **Settings -> Environment Variables** (Production and Preview):

| Name | Value |
| --- | --- |
| `LIVEKIT_URL` | `wss://<project-subdomain>.livekit.cloud` |
| `LIVEKIT_API_KEY` | the API key |
| `LIVEKIT_API_SECRET` | the API secret |
| `NEXT_PUBLIC_LIVEKIT_URL` | the same `wss://...` URL (this is the on switch; it is baked in at build time) |

Optional: `LIVEKIT_AGENT_NAME` if you change `AGENT_NAME` in the agent (default `questy-tutor`).
`ANTHROPIC_API_KEY` and the Sarvam key stay as they are for the existing path. Redeploy
after adding the variables (a `NEXT_PUBLIC_` change needs a fresh build).

### 3. Deploy the agent

The agent needs these secrets: `LIVEKIT_URL`, `LIVEKIT_API_KEY`, `LIVEKIT_API_SECRET`,
`SARVAM_API_KEY`, `ANTHROPIC_API_KEY` (optional: `ANTHROPIC_MODEL`, `SARVAM_STT_MODEL`,
`SARVAM_TTS_MODEL`).

**Option A — LiveKit Cloud agents (recommended: runs next to the media server, lowest latency)**

```bash
cd voice-agent
cat > .env.secrets <<'EOF'          # local only, never commit (git-ignored by voice-agent/.gitignore)
SARVAM_API_KEY=...
ANTHROPIC_API_KEY=...
ANTHROPIC_MODEL=claude-haiku-5-5
EOF
lk agent create --secrets-file .env.secrets .
```

`lk agent create` builds the `Dockerfile`, registers the agent with the project and
writes the agent id into `livekit.toml` (commit that file afterwards; it holds no secret).
LiveKit Cloud injects `LIVEKIT_URL` / `LIVEKIT_API_KEY` / `LIVEKIT_API_SECRET` itself.
Later updates: `lk agent deploy .`; secrets: `lk agent update-secrets --secrets-file .env.secrets`;
logs: `lk agent logs`; status: `lk agent status`. Then delete `.env.secrets`.

**Option B — Railway**

1. Railway -> **New project -> Deploy from GitHub repo** -> this repo.
2. Service **Settings -> Root directory**: `voice-agent` (Railway then uses
   `voice-agent/Dockerfile` and `railway.json`, start command `python agent.py start`).
3. **Variables**: add all five secrets above (`LIVEKIT_URL`, `LIVEKIT_API_KEY`,
   `LIVEKIT_API_SECRET`, `SARVAM_API_KEY`, `ANTHROPIC_API_KEY`).
4. No public domain or port is needed (the worker dials out to LiveKit). Give it at least
   1 vCPU / 1 GB RAM (the turn detector runs on CPU); each instance handles several
   concurrent sessions, add replicas for more. Choose a region near your LiveKit region.

Any other container host works the same way (`docker build voice-agent`, run with the env vars).

### 4. Verify

1. Agent: `lk agent logs` (Cloud) or the Railway deploy logs show `registered worker`
   with agent name `questy-tutor`.
2. Server: `curl https://<site>/api/livekit/token` returns `{"available":true}`.
3. App: open `/tutor`, pick a topic, start (mic allowed). The panel shows a **Realtime**
   badge and "Questy is joining…" then "Speaking"; the board draws while Questy talks.
   Interrupt mid-sentence: it should stop within ~0.3 s and answer.
4. LiveKit Cloud dashboard -> **Sessions** shows the room `tutor-...` with two participants
   (the student and the agent) and the agent's per-turn metrics.
5. Fallback check: temporarily stop the agent; a new session should switch to the normal
   voice path after about 5 s.

Local agent test: `cd voice-agent && pip install -r requirements.txt && cp .env.example .env.local`
(fill in), `python agent.py download-files && python agent.py dev`, then run the site
locally with the four Vercel variables in `.env.local`.

## Expected latency

From the end of the student's sentence to the first tutor audio: **about 0.8–1.5 s**
(turn detector ~0.3–0.5 s end-of-utterance + Sarvam STT final ~0.1–0.3 s + Claude first
tokens ~0.3–0.6 s, partly hidden by preemptive generation + Sarvam TTS first audio
~0.2–0.4 s). Interruptions stop playback in ~0.2–0.4 s. Watch the agent's
`metrics_collected` logs (EOU delay, LLM TTFT, TTS TTFB) in LiveKit Cloud to tune it.

## Costs and limits

Each session uses LiveKit minutes (agent + participant), Sarvam STT/TTS minutes and Claude
tokens. The token route applies the tutor's premium gate, the shared daily allowance and a
per-minute mint limit (6 per learner, 3 per guest IP); tokens last 30 minutes and empty
rooms close after 60 s.
