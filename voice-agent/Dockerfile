# Questy realtime voice agent (LiveKit Agents). Used by `lk agent create` (LiveKit Cloud)
# and by Railway / any container host. Build context: this folder.
FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1 PIP_NO_CACHE_DIR=1 PIP_DISABLE_PIP_VERSION_CHECK=1
RUN apt-get update && apt-get install -y --no-install-recommends gcc g++ libgomp1 ca-certificates \
    && rm -rf /var/lib/apt/lists/*

ARG UID=10001
RUN adduser --disabled-password --gecos "" --home /app --uid "${UID}" appuser
WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY agent.py prompt.py ./
RUN chown -R appuser /app
USER appuser

# Bake the Silero VAD and turn-detector model weights into the image (no download at start-up).
RUN python agent.py download-files

# The worker opens an outbound websocket to LIVEKIT_URL; no inbound port is needed.
CMD ["python", "agent.py", "start"]
