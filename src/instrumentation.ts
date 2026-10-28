/**
 * Server and edge error monitoring (Sentry). Does nothing unless NEXT_PUBLIC_SENTRY_DSN
 * (or SENTRY_DSN) is set, so local and preview builds stay silent.
 */
const dsn = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

export async function register() {
  if (!dsn) return;
  const Sentry = await import("@sentry/nextjs");
  Sentry.init({
    dsn,
    environment: process.env.VERCEL_ENV || process.env.NODE_ENV,
    release: process.env.VERCEL_GIT_COMMIT_SHA,
    tracesSampleRate: Number(process.env.SENTRY_TRACES_SAMPLE_RATE ?? 0.05),
    // Learners are often children: never attach IPs, cookies or request bodies.
    sendDefaultPii: false,
  });
}

export async function onRequestError(...args: Parameters<typeof import("@sentry/nextjs").captureRequestError>) {
  if (!dsn) return;
  const Sentry = await import("@sentry/nextjs");
  Sentry.captureRequestError(...args);
}
