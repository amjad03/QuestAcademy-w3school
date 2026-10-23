import Link from "next/link";
import type { Metadata } from "next";
import { PageIntro, Prose } from "@/components/marketing/Section";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What Quest Academy stores, where, and the choices you have.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageIntro eyebrow="Privacy" title="What we store, and where" lede="Short version: in guest mode everything stays on your device. If you sign in, your progress is synced to our database so it follows you across devices. There is no advertising and we do not sell data." />
      <section className="mx-auto max-w-[1120px] px-5 py-14">
        <div className="max-w-2xl">
          <Prose>
            <div>
              <h2>Guest mode</h2>
              <p>You can use Quest Academy without an account. Your profile (name or nickname, age group, chosen experience profile), lesson progress, practice results, streaks and settings are saved in your browser&apos;s storage on the device you are using. We do not receive this data. Clearing your browser data removes it.</p>
            </div>
            <div>
              <h2>Signing in and sync</h2>
              <p>If you choose to sign in, we store the same progress data together with your login identifier in our database, which is hosted on Supabase. This is what lets your progress appear on another device. Sync is optional and you can keep using guest mode instead.</p>
            </div>
            <div>
              <h2>What we do not collect</h2>
              <ul>
                <li>No advertising identifiers and no third-party ad networks.</li>
                <li>No location data.</li>
                <li>No contacts, photos or microphone access. Questy&apos;s voice uses the browser&apos;s own text-to-speech and sends nothing to us.</li>
              </ul>
            </div>
            <div>
              <h2>Children</h2>
              <p>The Explore profile is designed for primary-school children. Switching out of it, and any sign-in for a young child, is behind a grown-up check. We recommend that a parent or guardian creates and manages any account for a child under 13.</p>
            </div>
            <div>
              <h2>Videos</h2>
              <p>Lesson videos are embedded from the Quest Academy channel on a third-party video platform. When a video plays, that platform may set its own cookies under its own privacy policy.</p>
            </div>
            <div>
              <h2>Your choices</h2>
              <ul>
                <li>Stay in guest mode and nothing leaves your device.</li>
                <li>Export or delete your local data from Settings at any time.</li>
                <li>If you signed in, you can sign out from Settings; to delete your synced data and account, contact us and we will remove them.</li>
              </ul>
            </div>
            <div>
              <h2>Changes</h2>
              <p>If this page changes in a way that matters, we will say so on the site. This version applies from October 2026. See also our <Link href="/terms" className="font-bold text-accent">terms of use</Link>.</p>
            </div>
          </Prose>
        </div>
      </section>
    </main>
  );
}
