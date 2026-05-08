import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A1320",
          900: "#0E1A2B",
          800: "#15243A",
          700: "#1E3251",
        },
        accent: {
          DEFAULT: "#1E88E5",
          dark: "#1565C0",
          light: "#42A5F5",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,.04), 0 8px 24px -8px rgba(15,23,42,.12)",
        "card-hover": "0 1px 2px rgba(0,0,0,.04), 0 16px 40px -12px rgba(15,23,42,.18)",
      },
    },
  },
  plugins: [],
};

export default config;
