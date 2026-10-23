import type { Metadata, Viewport } from "next";
import { Baloo_2, IBM_Plex_Sans, Inter, JetBrains_Mono, Lexend, Manrope, Nunito, Source_Serif_4 } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import "@/experiences/sprout/theme.css";
import "@/experiences/explore/theme.css";
import "@/experiences/adventure/theme.css";
import "@/experiences/focus/theme.css";
import "@/experiences/mastery/theme.css";
import "@/experiences/research/theme.css";
import "@/experiences/professional/theme.css";
import { Providers } from "@/components/providers";
import { Overlays } from "@/components/shell/Overlays";
import { CommandPalette } from "@/components/shell/CommandPalette";

const sans = Nunito({ subsets: ["latin"], variable: "--font-sans", weight: ["500", "600", "700", "800", "900"], display: "swap" });
const pro = Inter({ subsets: ["latin"], variable: "--font-pro", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
// One typeface per experience profile (used through CSS variables in src/experiences/*/theme.css).
const sprout = Baloo_2({ subsets: ["latin"], variable: "--font-sprout", weight: ["500", "600", "700", "800"], display: "swap", preload: false });
const adventure = Lexend({ subsets: ["latin"], variable: "--font-adventure", display: "swap", preload: false });
const campus = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-campus", weight: ["400", "500", "600", "700"], display: "swap", preload: false });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap", preload: false });
const work = Manrope({ subsets: ["latin"], variable: "--font-work", display: "swap", preload: false });

export const metadata: Metadata = {
  title: { default: "Quest Academy — the free, fun way to learn anything", template: "%s · Quest Academy" },
  description:
    "Videos, articles, practice and tests for every subject — from first letters to university. Earn XP, keep your streak and master skills one lesson at a time.",
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#101521" },
  ],
};

// Applies the saved theme before first paint to avoid a flash.
const themeScript = `try{var s=JSON.parse(localStorage.getItem('quest-academy')||'{}').state;var t=s&&s.settings&&s.settings.theme||'light';if(t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');var p=s&&s.profile||{};var st=p.stage;var m=p.mode||({preprimary:'sprout',primary:'explore',middle:'adventure',secondary:'focus',aspirant:'focus',ug:'mastery',pg:'research',lifelong:'professional'})[st]||'adventure';document.documentElement.dataset.mode=m;document.documentElement.dataset.skin=(s&&s.settings&&s.settings.skin)||'modes'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${pro.variable} ${mono.variable} ${sprout.variable} ${adventure.variable} ${campus.variable} ${serif.variable} ${work.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans">
        <Providers>
          {children}
          <Overlays />
          <CommandPalette />
        </Providers>
      </body>
    </html>
  );
}
