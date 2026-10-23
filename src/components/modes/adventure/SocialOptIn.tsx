"use client";

import Link from "next/link";
import { useState } from "react";
import { ShieldHalf, Users } from "lucide-react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";
import { translate, useT } from "@/i18n";

type Translate = (key: string, english: string, vars?: Record<string, string | number>) => string;
const english: Translate = (key, en, vars) => translate("en", key, en, vars);

/** 3–16 letters/digits, single spaces/_/- between words; never a real name is required. */
export function validNickname(raw: string, t: Translate = english): string | null {
  const n = raw.trim().replace(/\s+/g, " ");
  if (n.length < 3) return t("social.nick.tooShort", "Use at least 3 characters.");
  if (n.length > 16) return t("social.nick.tooLong", "Keep it to 16 characters or fewer.");
  if (!/^[A-Za-z0-9]+([ _-][A-Za-z0-9]+)*$/.test(n)) return t("social.nick.invalid", "Letters and numbers only, with single spaces, _ or - between words.");
  return null;
}

/**
 * Opt-in for leagues and friend challenges (Adventure mode). Only a nickname
 * is ever shown to others.
 */
export function SocialOptInCard({ compact, className }: { compact?: boolean; className?: string }) {
  const setProfile = useLearner((s) => s.setProfile);
  const optedIn = useLearner((s) => Boolean(s.profile.socialOptIn));
  const current = useLearner((s) => s.profile.nickname ?? "");
  const [nick, setNick] = useState(current);
  const [error, setError] = useState<string | null>(null);
  const t = useT();

  const join = () => {
    const e = validNickname(nick, t);
    setError(e);
    if (e) return;
    setProfile({ nickname: nick.trim().replace(/\s+/g, " "), socialOptIn: true });
  };

  if (optedIn) {
    return (
      <section className={clsx("card p-5", className)}>
        <div className="flex items-center gap-3">
          <ShieldHalf className="h-8 w-8 fill-warn text-warn" strokeWidth={1.5} />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-muted">{t("social.competingAs", "Competing as")}</p>
            <p className="truncate text-lg font-black">{current || t("social.defaultNick", "Explorer")}</p>
          </div>
          <button onClick={() => setProfile({ socialOptIn: false })} className="btn-flat !text-muted">
            {t("social.leave", "Leave")}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={clsx("card p-5", className)}>
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
          <Users className="h-6 w-6" strokeWidth={2.4} />
        </span>
        <div>
          <h2 className="text-lg font-black">{t("social.join.title", "Join the leagues?")}</h2>
          <p className="mt-1 text-sm font-semibold leading-6 text-muted">
            {t("social.join.body", "Compete with other explorers and challenge friends. It’s optional — only your nickname is shown, never your real name.")}
          </p>
        </div>
      </div>
      {!compact && (
        <>
          <label htmlFor="adv-nick" className="eyebrow mt-4 block">
            {t("social.nick.label", "Pick a nickname")}
          </label>
          <input
            id="adv-nick"
            value={nick}
            onChange={(e) => {
              setNick(e.target.value);
              setError(null);
            }}
            onKeyDown={(e) => e.key === "Enter" && join()}
            placeholder={t("social.nick.placeholder", "e.g. RocketFox")}
            maxLength={20}
            className="input mt-2"
            aria-invalid={Boolean(error)}
          />
          {error && <p className="mt-2 text-sm font-bold text-bad">{error}</p>}
        </>
      )}
      {compact ? (
        <Link href="/leaderboard" className="btn-primary mt-4 w-full">
          {t("social.nick.setUp", "Set up my nickname")}
        </Link>
      ) : (
        <button onClick={join} className="btn-primary mt-4 w-full">
          {t("social.join.button", "Join the leagues")}
        </button>
      )}
    </section>
  );
}
