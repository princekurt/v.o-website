import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0A",
        "ink-2": "#141412",
        bone: "#E9E3D6",
        "bone-2": "#F3EEE2",
        amber: "#FFB000",
        "amber-deep": "#A86F00",
        ash: "#8A8578",
      },
      fontFamily: {
        poster: ["var(--font-poster)", "Impact", "sans-serif"],
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        "spin-slow": "spin 32s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-50%,0,0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
