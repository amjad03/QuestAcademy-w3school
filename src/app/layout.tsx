import type { Metadata, Viewport } from "next";
import { Noto_Sans_Bengali, Noto_Sans_Devanagari, Noto_Sans_Kannada, Noto_Sans_Tamil, Noto_Sans_Telugu, Baloo_2, IBM_Plex_Mono, IBM_Plex_Sans, Inter, JetBrains_Mono, Lexend, Manrope, Nunito, Source_Serif_4 } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import "@/experiences/sprout/theme.css";
import "@/experiences/explore/theme.css";
import "@/experiences/khan/theme.css";
import { Providers } from "@/components/providers";
import { OfflineSupport } from "@/components/offline/OfflineSupport";
import { Overlays } from "@/components/shell/Overlays";
import { CommandPalette } from "@/components/shell/CommandPalette";
import { NavProgress } from "@/components/shell/NavProgress";
import { Monitoring } from "@/components/shell/Monitoring";
import { SITE_URL } from "@/lib/site";

const sans = Nunito({ subsets: ["latin"], variable: "--font-sans", weight: ["500", "600", "700", "800", "900"], display: "swap" });
const pro = Inter({ subsets: ["latin"], variable: "--font-pro", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
// One typeface per experience profile (used through CSS variables in src/experiences/*/theme.css).
const sprout = Baloo_2({ subsets: ["latin"], variable: "--font-sprout", weight: ["500", "600", "700", "800"], display: "swap", preload: false });
const adventure = Lexend({ subsets: ["latin"], variable: "--font-adventure", display: "swap", preload: false });
const campus = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-campus", weight: ["400", "500", "600", "700"], display: "swap", preload: false });
const campusMono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono-campus", weight: ["400", "500", "600"], display: "swap", preload: false });
// Indian scripts: unicode-range subsets, so each downloads only when its characters appear.
const deva = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-deva", weight: ["400", "500", "600", "700", "800"], display: "swap", preload: false });
const knda = Noto_Sans_Kannada({ subsets: ["kannada"], variable: "--font-knda", weight: ["400", "500", "600", "700", "800"], display: "swap", preload: false });
const taml = Noto_Sans_Tamil({ subsets: ["tamil"], variable: "--font-taml", weight: ["400", "500", "600", "700", "800"], display: "swap", preload: false });
const telu = Noto_Sans_Telugu({ subsets: ["telugu"], variable: "--font-telu", weight: ["400", "500", "600", "700", "800"], display: "swap", preload: false });
const beng = Noto_Sans_Bengali({ subsets: ["bengali"], variable: "--font-beng", weight: ["400", "500", "600", "700", "800"], display: "swap", preload: false });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap", preload: false });
const work = Manrope({ subsets: ["latin"], variable: "--font-work", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Quest Academy: free lessons and practice from pre-school to college", template: "%s · Quest Academy" },
  description:
    "Lessons, practice and mock tests mapped to CBSE, ICSE, Karnataka PUC, NEET and JEE, plus college subjects and career skills. In English and six Indian languages.",
  applicationName: "Quest Academy",
  icons: { icon: "/icon.svg" },
  alternates: { canonical: "./" },
  openGraph: { siteName: "Quest Academy", type: "website", locale: "en_IN", images: [{ url: "/landing/lesson.webp", width: 2880, height: 1800, alt: "A Quest Academy lesson" }] },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  // The site opens in the light theme unless the learner picks dark, so the browser bar matches it.
  themeColor: "#ffffff",
};

// Applies the saved theme before first paint to avoid a flash.
const themeScript = `try{var s=JSON.parse(localStorage.getItem('quest-academy')||'{}').state;var t=s&&s.settings&&s.settings.theme||'light';if(t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');var p=s&&s.profile||{};var st=p.stage;var m=p.mode||({preprimary:'sprout',primary:'explore',middle:'adventure',secondary:'focus',aspirant:'focus',ug:'mastery',pg:'research',lifelong:'professional'})[st]||'adventure';document.documentElement.dataset.mode=m;var pa=location.pathname;if(pa.length>1&&pa.charAt(pa.length-1)==='/')pa=pa.slice(0,-1);document.documentElement.dataset.skin=['/','/about','/for-schools','/privacy','/terms'].indexOf(pa)>-1?'site':((s&&s.settings&&s.settings.skin)||'modes');var lc=document.documentElement.dataset.skin==='site'?'en-IN':{en:'en-IN',hi:'hi-IN',kn:'kn-IN',ta:'ta-IN',te:'te-IN',mr:'mr-IN',bn:'bn-IN'}[(s&&s.settings&&s.settings.locale)||'en'];if(lc)document.documentElement.lang=lc}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${pro.variable} ${mono.variable} ${sprout.variable} ${adventure.variable} ${campus.variable} ${campusMono.variable} ${serif.variable} ${work.variable} ${deva.variable} ${knda.variable} ${taml.variable} ${telu.variable} ${beng.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans">
        <NavProgress />
        <Providers>
          {children}
          <Overlays />
          <CommandPalette />
          <Monitoring />
          <OfflineSupport />
        </Providers>
      </body>
    </html>
  );
}
