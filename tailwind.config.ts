import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { royal: "#0B4AA8", navy: "#051F4A", gold: "#F7B919", sky: "#F3F7FD" }, fontFamily: { display: ["var(--font-display)"], sans: ["var(--font-body)"] } } },
  plugins: [],
} satisfies Config;
