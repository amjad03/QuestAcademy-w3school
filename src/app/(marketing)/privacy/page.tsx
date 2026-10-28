import Link from "next/link";
import type { Metadata } from "next";
import { PageIntro, Prose } from "@/components/marketing/Section";
import { GRIEVANCE } from "@/lib/compliance";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What Quest Academy stores, where, why, and the choices students and parents have under India's DPDP Act 2023.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Privacy policy"
        title="What we store, why, and your choices"
        lede="Short version: in guest mode your progress stays on your device. If you sign in, we keep your progress in our database so it follows you. We do not sell data, show ads, or use your work to train AI models. Students under 18 need a parent or guardian's consent."
      />
      <section className="mx-auto max-w-[1120px] px-5 py-14">
        <div className="max-w-2xl">
          <Prose>
            <div>
              <h2>Who we are</h2>
              <p>Quest Academy (&quot;we&quot;) is the Data Fiduciary for the personal data described here, under India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act). If something here is unclear, write to our Grievance Officer (details at the end). We answer in plain language.</p>
            </div>
            <div>
              <h2>What we collect</h2>
              <ul>
                <li><strong>Guest mode:</strong> your name or nickname, age group, class, and learning progress are saved in your browser on your device. We do not receive them.</li>
                <li><strong>With an account:</strong> your email address (or the sign-in your school uses), the same profile and progress, notes and doubts, and settings, so they sync across devices.</li>
                <li><strong>Parent or guardian details:</strong> for students under 18, the parent&apos;s email or phone number, and a record of their consent with the date and time.</li>
                <li><strong>School use:</strong> if you join a class, your teacher and school can see your progress and assignment results. Leaderboards show a nickname, never your real name, and you can hide yourself.</li>
                <li><strong>AI tutor:</strong> the questions you ask, and any photo of a doubt you choose to send, go to the AI service to get an answer. We log how much the tutor was used (number of requests and their size), not the conversation itself.</li>
                <li><strong>Payments:</strong> if you buy the tutor pass, Razorpay handles your card or UPI details. We only keep the order and payment id, amount and date.</li>
              </ul>
            </div>
            <div>
              <h2>Why we use it</h2>
              <ul>
                <li>To run your lessons, practice, mock tests, study plan and streaks, and to sync them to your account.</li>
                <li>To answer your questions in the AI tutor, and to keep daily limits fair.</li>
                <li>To show teachers and parents the progress you share with them.</li>
                <li>To fix errors (we use an error-reporting service that receives technical details and your account id, never your name or email).</li>
                <li>Only if you say yes: to count how the site is used so we can improve it (see below).</li>
              </ul>
              <p>We use your data only for these purposes. We never sell it, never use it for advertising, and never let the AI service train on it.</p>
            </div>
            <div id="analytics">
              <h2>Analytics and cookies</h2>
              <p>We do not use advertising cookies. The browser storage we use for your progress and settings is needed for the site to work. With your permission, we also use a product analytics service (PostHog) to count events such as &quot;lesson started&quot; or &quot;mock test submitted&quot;. These events carry only a random account id: no names, emails, answers or IP addresses. You can say no in the banner, or turn it off any time in Settings, Your data.</p>
            </div>
            <div>
              <h2>Children and parental consent</h2>
              <p>The DPDP Act treats anyone under 18 as a child. Before a student under 18 uses Quest Academy with their data saved, a parent or legal guardian must give consent during sign-up by adding their contact and ticking the consent box. If they give an email address, we send them a link to confirm. We do not track children for advertising or build behavioural profiles of them. A parent can withdraw consent at any time by deleting the account (Settings, Account) or by writing to the Grievance Officer.</p>
            </div>
            <div>
              <h2>Where your data is stored</h2>
              <p>Our database and sign-in run on Supabase, hosted in India (Mumbai region), and the site is served by Vercel. Some services we rely on are outside India: the AI tutor service (Anthropic), error reporting (Sentry) and analytics (PostHog) may process data in the United States or the European Union. We send them only what each needs, as described above, under agreements that require them to protect it. Lesson videos are embedded from a third-party video platform, which may set its own cookies when a video plays.</p>
            </div>
            <div>
              <h2>How long we keep it</h2>
              <p>We keep account data while the account exists. When you delete your account, your profile, progress, notes and consent records are deleted straight away. We keep payment records (without your name) for as long as Indian tax law requires, and anonymous usage totals. Backups roll over within 30 days.</p>
            </div>
            <div>
              <h2>Your rights</h2>
              <ul>
                <li><strong>See your data:</strong> download everything in your account as a file from Settings, Account, Your account data.</li>
                <li><strong>Correct it:</strong> change your name, class and other details in Settings.</li>
                <li><strong>Delete it:</strong> delete your account from Settings, Account. This removes your data from our database.</li>
                <li><strong>Withdraw consent:</strong> turn analytics off in Settings, or delete the account to withdraw parental consent.</li>
                <li><strong>Nominate someone:</strong> you can name a person to use these rights for you if you cannot; write to us.</li>
                <li><strong>Complain:</strong> write to our Grievance Officer. If you are not satisfied, you can complain to the Data Protection Board of India.</li>
              </ul>
            </div>
            <div>
              <h2>Grievance Officer</h2>
              <p>
                {GRIEVANCE.name}
                <br />
                Email: <a href={`mailto:${GRIEVANCE.email}`} className="font-bold text-accent">{GRIEVANCE.email}</a>
                <br />
                {GRIEVANCE.address}
              </p>
              <p>We reply within 7 days and resolve complaints within 30 days.</p>
            </div>
            <div>
              <h2>Changes</h2>
              <p>If this policy changes in a way that matters, we will say so on the site and, where the law needs it, ask for consent again. This version applies from 28 October 2026. See also our <Link href="/terms" className="font-bold text-accent">terms of use</Link>.</p>
            </div>
          </Prose>
        </div>
      </section>
    </main>
  );
}
