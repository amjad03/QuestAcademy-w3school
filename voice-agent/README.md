# Questy realtime voice agent

LiveKit Agents worker for the low-latency voice tutor: Silero VAD + LiveKit multilingual
turn detector, Sarvam STT (saaras:v3, transcribe; saarika:v2.5 is sunset), Claude via the
Anthropic plugin, Sarvam TTS (bulbul:v3, priya/rahul), preemptive generation, barge-in and
Krisp noise cancellation. Board ops go to the browser on data topic `board`; the browser
sends board work/taps on topic `student`.

Local run:

```bash
python -m venv .venv && . .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env.local   # fill in the keys
python agent.py download-files
python agent.py dev
```

Deploy (LiveKit Cloud `lk agent create`, or Railway) and verification:
see [`docs/realtime-voice.md`](../docs/realtime-voice.md).
