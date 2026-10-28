/**
 * Browser error monitoring (Sentry), loaded only when NEXT_PUBLIC_SENTRY_DSN is set.
 * The SDK is imported lazily so it never weighs down the first page load.
 */
const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (dsn) {
  void import("@sentry/nextjs").then((Sentry) =>
    Sentry.init({
      dsn,
      environment: process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NODE_ENV,
      tracesSampleRate: Number(process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE ?? 0.02),
      sendDefaultPii: false,
      // Old builds still open in a tab and browser extensions are not our bugs.
      ignoreErrors: [/ChunkLoadError/, /Loading chunk \d+ failed/, /ResizeObserver loop/, /Non-Error promise rejection captured/],
      denyUrls: [/^chrome-extension:\/\//, /^moz-extension:\/\//, /^safari-web-extension:\/\//],
    }),
  );
}
