/**
 * Study reminders. Only the in-app nudge works today (see PlanReminder on the class home,
 * driven by reminderDue in personalise.ts). The other channels are the interface a
 * provider plugs into once one is configured.
 */
import type { PersonalProfile } from "./personalise";

export type ReminderChannelId = "in-app" | "push" | "email" | "whatsapp" | "sms";

export interface ReminderMessage {
  title: string;
  body: string;
  /** Where tapping the reminder goes. */
  href: string;
}

export interface ReminderChannel {
  id: ReminderChannelId;
  /** Whether this channel can deliver for this learner right now (provider configured, address known, permission granted). */
  available(p: PersonalProfile): boolean;
  /** Schedule a daily reminder at p.reminderTime (local time). */
  schedule(p: PersonalProfile, msg: ReminderMessage): Promise<void>;
  cancel(): Promise<void>;
}

const unavailable = (id: ReminderChannelId): ReminderChannel => ({
  id,
  available: () => false,
  schedule: async () => {},
  cancel: async () => {},
});

/** In-app: nothing to schedule; the class home shows a banner once the time has passed. */
export const inAppChannel: ReminderChannel = { id: "in-app", available: (p) => Boolean(p.reminderTime), schedule: async () => {}, cancel: async () => {} };

// TODO(push): register a service worker, ask Notification permission, store the PushSubscription
// in Supabase and send from a scheduled server job at reminderTime in the learner's time zone.
export const pushChannel = unavailable("push");
// TODO(email): send to p.parentEmail via a transactional email provider (none configured yet).
export const emailChannel = unavailable("email");
// TODO(whatsapp): WhatsApp Business API template message to p.parentPhone (needs opt-in + provider).
export const whatsappChannel = unavailable("whatsapp");
// TODO(sms): SMS to p.parentPhone via an Indian DLT-registered SMS provider.
export const smsChannel = unavailable("sms");

export const REMINDER_CHANNELS: ReminderChannel[] = [inAppChannel, pushChannel, emailChannel, whatsappChannel, smsChannel];

/** Schedule on every channel that can deliver. Safe to call after any settings change. */
export async function syncReminders(p: PersonalProfile, msg: ReminderMessage) {
  await Promise.all(REMINDER_CHANNELS.map((c) => (c.available(p) ? c.schedule(p, msg) : c.cancel())));
}
