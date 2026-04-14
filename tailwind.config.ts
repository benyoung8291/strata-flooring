import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F8FAFB",
          100: "#EFF3F5",
          200: "#DDE4E8",
          300: "#C0CBD1",
          400: "#91A0A8",
          500: "#657279",
          600: "#4A555C",
          700: "#303D42",
          800: "#202A2E",
          900: "#141A1D",
        },
        accent: {
          DEFAULT: "#1B6B6D",
          hover: "#145455",
          light: "#E6F3F3",
        },
        teal: {
          DEFAULT: "#1B6B6D",
          hover: "#145455",
          light: "#E6F3F3",
        },
        warm: {
          DEFAULT: "#C4652A",
          light: "#FDF0E8",
        },
        interface: "#2D5A3C",
        acouflor: "#4A6FA5",
        shaw: "#8B4513",
      },
      fontFamily: {
        serif: ["Georgia", "'Times New Roman'", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "4.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "3.5rem",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "2.75rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        "heading-lg": [
          "2.25rem",
          { lineHeight: "1.25", letterSpacing: "-0.015em" },
        ],
        "heading-md": [
          "1.75rem",
          { lineHeight: "1.3", letterSpacing: "-0.015em" },
        ],
        "heading-sm": [
          "1.375rem",
          { lineHeight: "1.35", letterSpacing: "-0.015em" },
        ],
        "body-lg": ["1.25rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        label: [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.12em", fontWeight: "600" },
        ],
      },
      boxShadow: {
        sm: "0 1px 2px rgba(20,26,29,0.05)",
        md: "0 4px 12px rgba(20,26,29,0.08)",
        lg: "0 8px 24px rgba(20,26,29,0.12)",
        xl: "0 16px 48px rgba(20,26,29,0.16)",
        inner: "inset 0 2px 4px rgba(20,26,29,0.06)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      maxWidth: {
        narrow: "768px",
        content: "1280px",
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
