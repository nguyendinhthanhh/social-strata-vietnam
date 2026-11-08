import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#121416",
        "charcoal-deep": "#1C1F22",
        chalk: "#F7F6F2",
        "stone-warm": "#E8E6DF",
        "warm-stone": "#E8E6DF",
        "border-subtle": "#D5D2C7",
        "subtle-border": "#D5D2C7",
        vermilion: "#C8372D",
        "dark-red": "#A62E2D",
        citron: "#C8D668",
        "text-muted": "#5E656B",
        "muted-text": "#5E656B",
        "text-light-muted": "#A2A8AE",
        "light-muted": "#A2A8AE",
        "paper-pure": "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-family-display)", "Georgia", "serif"],
        body: ["var(--font-family-body)", "sans-serif"],
        mono: ["var(--font-family-mono)", "monospace"],
      },
      fontSize: {
        "display-hero": "var(--font-size-display-hero)",
        "display-1": "var(--font-size-display-1)",
        "display-2": "var(--font-size-display-2)",
        "heading-3": "var(--font-size-heading-3)",
        lead: "var(--font-size-lead)",
        body: "var(--font-size-body)",
        caption: "var(--font-size-caption)",
        kicker: "var(--font-size-kicker)",
      },
      lineHeight: {
        "display-hero": "1.15",
        "display-1": "1.20",
        "display-2": "1.25",
        "heading-3": "1.30",
        lead: "1.55",
        body: "1.65",
        caption: "1.45",
        kicker: "1.35",
      },
      letterSpacing: {
        kicker: "0.08em",
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
      },
      boxShadow: {
        "paper-subtle": "0 1px 3px rgba(18, 20, 22, 0.05), 0 1px 2px rgba(18, 20, 22, 0.03)",
        elevated: "0 8px 24px -4px rgba(18, 20, 22, 0.08)",
      },
      transitionTimingFunction: {
        "editorial-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "editorial-in-out": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
