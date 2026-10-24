"use client";

import { Check, Coins, Snowflake } from "lucide-react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";
import { AVATARS, FRAMES, STREAK_FREEZE_PRICE } from "@/lib/gamification";
import { useUi } from "@/lib/ui";
import { sfx } from "@/lib/sound";
import { useHydrated } from "@/components/providers";
import { Avatar } from "@/components/shell/Avatar";
import { PageColumns } from "@/components/shell/AppShell";
import { LeagueCard, QuestsCard, RailFooter } from "@/components/shell/RailCards";
import { useT } from "@/i18n";

export function Shop() {
  const t = useT();
  const COLOR_NAME: Record<string, string> = {
    blue: t("shop.color.blue", "Quest Blue"),
    green: t("shop.color.green", "Leaf"),
    purple: t("shop.color.purple", "Royal"),
    orange: t("shop.color.orange", "Tangerine"),
    red: t("shop.color.red", "Cherry"),
    teal: t("shop.color.teal", "Lagoon"),
    pink: t("shop.color.pink", "Blossom"),
    sky: t("shop.color.sky", "Sky"),
    navy: t("shop.color.navy", "Midnight"),
    gold: t("shop.color.gold", "Gold"),
  };
  const hydrated = useHydrated();
  const s = useLearner();
  const toast = useUi((u) => u.toast);

  const rail = (
    <>
      <QuestsCard limit={3} />
      <LeagueCard />
      <RailFooter />
    </>
  );

  if (!hydrated) return <PageColumns rail={rail}><div className="h-96 animate-pulse rounded-2xl bg-surface-2" /></PageColumns>;

  const buy = (id: string, price: number, apply: () => void) => {
    if (s.owned.includes(id)) return apply();
    if (s.buy(id, price)) {
      sfx("coin");
      apply();
      toast({ text: t("shop.toast.unlocked", "Unlocked!") });
    } else {
      sfx("wrong");
      toast({ text: t("shop.toast.needMore", "You need {n} more coins", { n: price - s.coins }) });
    }
  };

  return (
    <PageColumns rail={rail}>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black">{t("shop.title", "Shop")}</h1>
          <p className="mt-1 font-semibold text-muted">{t("shop.subtitle", "Earn coins from lessons, quests, chests, challenges and achievements.")}</p>
        </div>
        <span className="flex items-center gap-2 text-2xl font-black text-warn-shade">
          <Coins className="h-7 w-7" strokeWidth={2.5} /> {s.coins}
        </span>
      </div>

      {/* power-ups */}
      <h2 className="mt-10 text-xl font-black">{t("shop.powerUps", "Power-ups")}</h2>
      <div className="card mt-4 flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#1CB0F6] text-white" style={{ boxShadow: "inset 0 -5px 0 #1290CC" }}>
          <Snowflake className="h-9 w-9" strokeWidth={2.5} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-black">{t("shop.freeze.title", "Streak freeze")}</h3>
          <p className="text-sm font-semibold text-muted">{t("shop.freeze.body", "Keeps your streak alive if you miss a day. {n}/3 equipped.", { n: s.streak.freezes })}</p>
        </div>
        <button
          className="btn-ghost shrink-0"
          disabled={s.streak.freezes >= 3}
          onClick={() => {
            if (s.buyFreeze()) {
              sfx("coin");
              toast({ text: t("shop.toast.freezeEquipped", "Streak freeze equipped") });
            } else toast({ text: t("shop.toast.needCoins", "You need {n} coins", { n: STREAK_FREEZE_PRICE }) });
          }}
        >
          {s.streak.freezes >= 3 ? (
            t("shop.freeze.full", "Full")
          ) : (
            <>
              {t("shop.freeze.getFor", "Get for")} <Coins className="h-4 w-4 text-warn-shade" /> {STREAK_FREEZE_PRICE}
            </>
          )}
        </button>
      </div>

      {/* profile colours */}
      <h2 className="mt-10 text-xl font-black">{t("shop.colours", "Profile colour")}</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {AVATARS.map((a) => {
          const own = s.owned.includes(a.id);
          const active = s.profile.avatar === a.id;
          return (
            <button key={a.id} onClick={() => buy(a.id, a.price, () => s.setProfile({ avatar: a.id }))} className={clsx("tile flex flex-col items-center gap-2 px-2 py-4 text-center", active && "!border-accent !bg-accent-soft")}>
              <Avatar name={s.profile.name} color={a.id} size={56} />
              <span className="text-sm font-extrabold">{COLOR_NAME[a.id] ?? a.id}</span>
              <PriceTag own={own} active={active} price={a.price} />
            </button>
          );
        })}
      </div>

      {/* frames */}
      <h2 className="mt-10 text-xl font-black">{t("shop.frames", "Avatar frames")}</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {FRAMES.map((f) => {
          const own = s.owned.includes(f.id);
          const active = s.profile.frame === f.id;
          return (
            <button key={f.id} onClick={() => buy(f.id, f.price, () => s.setProfile({ frame: f.id }))} className={clsx("tile flex flex-col items-center gap-2 px-2 py-4 text-center", active && "!border-accent !bg-accent-soft")}>
              <Avatar name={s.profile.name} color={s.profile.avatar} frame={f.id} size={56} />
              <span className="text-sm font-extrabold">{f.name}</span>
              <PriceTag own={own} active={active} price={f.price} />
            </button>
          );
        })}
      </div>
    </PageColumns>
  );
}

function PriceTag({ own, active, price }: { own: boolean; active: boolean; price: number }) {
  const t = useT();
  if (active)
    return (
      <span className="flex items-center gap-1 text-xs font-extrabold uppercase text-accent">
        <Check className="hidden h-3.5 w-3.5 sm:block" strokeWidth={3.5} /> {t("shop.equipped", "Equipped")}
      </span>
    );
  if (own) return <span className="text-xs font-extrabold uppercase tracking-wide text-muted">{t("shop.owned", "Owned")}</span>;
  return (
    <span className="flex items-center gap-1 text-sm font-black text-warn-shade">
      <Coins className="h-4 w-4" /> {price}
    </span>
  );
}
