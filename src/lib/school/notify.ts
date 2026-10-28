import "server-only";

/**
 * Sending weekly reports. WhatsApp via the Meta WhatsApp Cloud API (template message),
 * with an email hook as fallback. Each sender reports what happened instead of throwing.
 */

export interface SendResult {
  channel: "whatsapp" | "email" | "none";
  status: "sent" | "not_sent" | "failed";
  detail: string;
}

export const whatsappConfigured = () => Boolean(process.env.WHATSAPP_TOKEN && process.env.WHATSAPP_PHONE_ID && process.env.WHATSAPP_TEMPLATE_NAME);
export const emailConfigured = () => Boolean(process.env.REPORT_EMAIL_WEBHOOK_URL);

/** Digits only, with a default country code for 10-digit Indian numbers. */
export function normalisePhone(raw: string) {
  const d = raw.replace(/[^\d]/g, "");
  if (d.length === 10) return `${process.env.WHATSAPP_DEFAULT_COUNTRY_CODE || "91"}${d}`;
  if (d.length === 11 && d.startsWith("0")) return `${process.env.WHATSAPP_DEFAULT_COUNTRY_CODE || "91"}${d.slice(1)}`;
  return d;
}

export async function sendWhatsApp(phone: string, params: string[]): Promise<SendResult> {
  if (!whatsappConfigured()) return { channel: "whatsapp", status: "not_sent", detail: "WhatsApp is not configured" };
  const version = process.env.WHATSAPP_API_VERSION || "v21.0";
  const res = await fetch(`https://graph.facebook.com/${version}/${process.env.WHATSAPP_PHONE_ID}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: normalisePhone(phone),
      type: "template",
      template: {
        name: process.env.WHATSAPP_TEMPLATE_NAME,
        language: { code: process.env.WHATSAPP_TEMPLATE_LANG || "en" },
        components: [{ type: "body", parameters: params.map((text) => ({ type: "text", text })) }],
      },
    }),
    signal: AbortSignal.timeout(15_000),
  }).catch((e: Error) => e);
  if (res instanceof Error) return { channel: "whatsapp", status: "failed", detail: res.message };
  const body = (await res.json().catch(() => ({}))) as { messages?: { id: string }[]; error?: { message?: string; code?: number } };
  if (!res.ok) return { channel: "whatsapp", status: "failed", detail: `${res.status} ${body.error?.message ?? ""}`.trim() };
  return { channel: "whatsapp", status: "sent", detail: body.messages?.[0]?.id ?? "accepted" };
}

/**
 * Email fallback hook: POSTs { to, subject, text } to REPORT_EMAIL_WEBHOOK_URL
 * (an email service, Zapier/Make hook or your own endpoint), with REPORT_EMAIL_WEBHOOK_SECRET as a bearer token.
 */
export async function sendEmail(to: string, subject: string, text: string): Promise<SendResult> {
  if (!emailConfigured()) return { channel: "email", status: "not_sent", detail: "Email hook is not configured" };
  const res = await fetch(process.env.REPORT_EMAIL_WEBHOOK_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(process.env.REPORT_EMAIL_WEBHOOK_SECRET ? { Authorization: `Bearer ${process.env.REPORT_EMAIL_WEBHOOK_SECRET}` } : {}) },
    body: JSON.stringify({ to, subject, text }),
    signal: AbortSignal.timeout(15_000),
  }).catch((e: Error) => e);
  if (res instanceof Error) return { channel: "email", status: "failed", detail: res.message };
  return res.ok ? { channel: "email", status: "sent", detail: `${res.status}` } : { channel: "email", status: "failed", detail: `${res.status}` };
}
