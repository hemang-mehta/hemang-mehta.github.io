import type { Config } from "tailwindcss";

/**
 * All colours come from CSS variables defined in app/globals.css,
 * so the light (Template C) and dark (Template C2) themes share every class.
 */
const v = (name: string) => `var(--${name})`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Manrope Variable'", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        page: v("page"),
        card: { DEFAULT: v("card"), border: v("card-border") },
        ink: {
          DEFAULT: v("ink"),
          soft: v("ink-soft"),
          body: v("ink-body"),
          muted: v("ink-muted"),
        },
        chip: v("chip"),
        rule: v("rule"),
        feature: {
          DEFAULT: v("feature"),
          ink: v("feature-ink"),
          body: v("feature-body"),
          muted: v("feature-muted"),
        },
        accent: { DEFAULT: v("accent"), ink: v("on-accent") },
        invert: { DEFAULT: v("invert"), ink: v("invert-ink") },
        light: { DEFAULT: v("light"), ink: v("light-ink") },
      },
      maxWidth: { page: "1200px" },
      letterSpacing: {
        label: "0.08em",
        display: "-0.045em",
        heading: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
