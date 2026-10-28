"use client";

/** Report a caught error to Sentry when it is configured; otherwise a no-op. */
export function reportError(error: unknown, context?: Record<string, unknown>) {
  if (!process.env.NEXT_PUBLIC_SENTRY_DSN) return;
  void import("@sentry/nextjs")
    .then((Sentry) => Sentry.captureException(error, context ? { extra: context } : undefined))
    .catch(() => {});
}

/** Tag later reports with the account id only (never a name or email). */
export function setMonitoringUser(id: string | null) {
  if (!process.env.NEXT_PUBLIC_SENTRY_DSN) return;
  void import("@sentry/nextjs")
    .then((Sentry) => Sentry.setUser(id ? { id } : null))
    .catch(() => {});
}
