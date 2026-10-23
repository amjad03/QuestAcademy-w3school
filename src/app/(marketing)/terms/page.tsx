import Link from "next/link";
import type { Metadata } from "next";
import { PageIntro, Prose } from "@/components/marketing/Section";

export const metadata: Metadata = {
  title: "Terms",
  description: "Plain-language terms for using Quest Academy.",
};

export default function TermsPage() {
  return (
    <main>
      <PageIntro eyebrow="Terms of use" title="Plain-language terms" lede="Quest Academy is free to use for learning. These terms set out what you can expect from us and what we ask of you." />
      <section className="mx-auto max-w-[1120px] px-5 py-14">
        <div className="max-w-2xl">
          <Prose>
            <div>
              <h2>Using the site</h2>
              <p>You may use the lessons, practice sets, worksheets and other materials for personal study, for teaching your own students, and in classrooms. Please do not copy the content to republish it elsewhere, remove credits, or use automated tools to scrape the site.</p>
            </div>
            <div>
              <h2>Accounts and guest mode</h2>
              <p>You do not need an account. In guest mode your data stays on your device and you are responsible for it. If you sign in, keep your login details to yourself and tell us if you think someone else has used your account. A parent or guardian should manage any account for a child under 13.</p>
            </div>
            <div>
              <h2>Content and accuracy</h2>
              <p>We work to keep lessons, syllabus mappings and exam information correct, but mistakes happen and syllabi change. Always check against your board&apos;s or examination body&apos;s official documents. Quest Academy is a study aid, not a guarantee of any exam result.</p>
            </div>
            <div>
              <h2>Certificates</h2>
              <p>Pathway certificates are Quest Academy certificates of completion. They are not accredited, are not a qualification, and are not recognised by universities, boards or employers unless they choose to recognise them.</p>
            </div>
            <div>
              <h2>Being a good member</h2>
              <p>Where the site has shared features such as leaderboards or competitions, use a sensible display name and treat other learners with respect. We may remove names or entries that are abusive or misleading.</p>
            </div>
            <div>
              <h2>Availability and changes</h2>
              <p>The site is provided as is, free of charge. We may change, add or remove content and features, and we may need to take the site offline for maintenance. We will try to give notice of changes that affect synced accounts.</p>
            </div>
            <div>
              <h2>Privacy</h2>
              <p>How we handle data is described on the <Link href="/privacy" className="font-bold text-accent">privacy page</Link>, which forms part of these terms. This version applies from October 2026.</p>
            </div>
          </Prose>
        </div>
      </section>
    </main>
  );
}
