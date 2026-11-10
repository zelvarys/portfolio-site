/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mist: "var(--color-mist)",
        cream: "var(--color-cream)",
        cocoa: "var(--color-cocoa)",
        "cocoa-soft": "var(--color-cocoa-soft)",
        muted: "var(--color-muted)",
        line: "var(--color-line)",
        sunshine: "var(--color-sunshine)",
        leaf: "var(--color-leaf)",
        "leaf-ink": "var(--color-leaf-ink)",
        rose: "var(--color-rose)",
        "rose-ink": "var(--color-rose-ink)",
        sky: "var(--color-sky)",
        "sky-ink": "var(--color-sky-ink)",
        tangerine: "var(--color-tangerine)",
        "tangerine-ink": "var(--color-tangerine-ink)",
      },
      fontFamily: {
        sans: ["var(--font-delius)", "ui-sans-serif", "system-ui", "sans-serif"],
        secondary: ["var(--font-fredoka)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}
