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
        background: "#090a0d",
        foreground: "#f4f4f5",
        olive: {
          dark: "#2a3522",
          DEFAULT: "#3a492f",
          hover: "#4a5c3d",
          light: "#526643",
          accent: "#8ea47c",
          muted: "#9cb589",
          highlight: "#d3e3c6",
          soft: "#c5d6b4",
        },
      },
      fontFamily: {
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
        sans: ["Geist", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
