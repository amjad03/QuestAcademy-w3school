import type { Metadata, Viewport } from "next";
import { Fraunces, Fredoka, JetBrains_Mono, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/shell/Navbar";
import { MobileNav } from "@/components/shell/MobileNav";
import { Overlays } from "@/components/shell/Overlays";
import { CommandPalette } from "@/components/shell/CommandPalette";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const kids = Fredoka({ subsets: ["latin"], variable: "--font-kids", display: "swap" });
const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Quest Academy — learn anything, your way", template: "%s · Quest Academy" },
  description:
    "Interactive lessons, live code, simulations, quizzes, mock tests and gamified quests — for pre-primary kids, K-12, NEET/JEE aspirants, coders and UG/PG students.",
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0a14" },
  ],
};

// Applies the saved theme before first paint to avoid a flash.
const themeScript = `try{var s=JSON.parse(localStorage.getItem('quest-academy')||'{}').state;var t=s&&s.settings&&s.settings.theme||'system';if(t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${display.variable} ${mono.variable} ${kids.variable} ${serif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans">
        <Providers>
          <Navbar />
          <main className="pb-24 md:pb-0">{children}</main>
          <MobileNav />
          <Overlays />
          <CommandPalette />
        </Providers>
      </body>
    </html>
  );
}
