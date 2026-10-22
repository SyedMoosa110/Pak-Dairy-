import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { canvas: "#08160E", forest: "#0F2417", paper: "#F8FAF8", neon: "#22C55E", accent: "#16A34A", slate2: "#94A3B8" },
    fontFamily: { sans: ["var(--font-jakarta)", "sans-serif"], display: ["var(--font-syne)", "sans-serif"] },
    boxShadow: { glow: "0 0 40px -8px rgba(34,197,94,.55)" },
    keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } } },
    animation: { float: "float 6s ease-in-out infinite" },
  } },
  plugins: [],
} satisfies Config;
