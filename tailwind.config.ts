import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#d9e9ff",
          200: "#b2d2ff",
          300: "#7fb2ff",
          400: "#4d91ff",
          500: "#1f70ff",
          600: "#1657cc",
          700: "#0f3fa0",
          800: "#092a73",
          900: "#061c52",
        },
      },
      backgroundImage: {
        "grid-overlay": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
      },
      boxShadow: {
        glow: "0 10px 40px rgba(31, 112, 255, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
