import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: v("bg"),
        surface: v("surface"),
        "surface-2": v("surface-2"),
        line: v("line"),
        ink: v("ink"),
        muted: v("muted"),
        // brand
        accent: v("accent"),
        "accent-shade": v("accent-shade"),
        "accent-soft": v("accent-soft"),
        "accent-2": v("accent-2"),
        "accent-2-shade": v("accent-2-shade"),
        good: v("good"),
        "good-shade": v("good-shade"),
        "good-soft": v("good-soft"),
        bad: v("bad"),
        "bad-shade": v("bad-shade"),
        "bad-soft": v("bad-soft"),
        warn: v("warn"),
        "warn-shade": v("warn-shade"),
        streak: v("streak"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "var(--font-indic)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        kids: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: { "4xl": "2rem" },
      boxShadow: {
        soft: "0 1px 2px rgb(16 24 40 / 0.04), 0 4px 16px -6px rgb(16 24 40 / 0.08)",
        pop: "0 4px 0 0 rgb(var(--line))",
        glow: "0 0 0 0 transparent",
        lift: "0 12px 32px -12px rgb(16 24 40 / 0.18)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        wiggle: { "0%,100%": { transform: "rotate(-3deg)" }, "50%": { transform: "rotate(3deg)" } },
        bob: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-4px)" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: {
        float: "float 3.2s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        bob: "bob 1.6s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        blink: "blink 1s step-end infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
