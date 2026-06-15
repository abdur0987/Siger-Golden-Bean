import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          950: "#2A1711",
          900: "#3A1F16",
          800: "#4B2B20"
        },
        gold: {
          500: "#B88A2E",
          400: "#C89B3C",
          300: "#DAB769"
        },
        cream: {
          50: "#FCFAF4",
          100: "#F6F1E7",
          200: "#EDE3D1"
        },
        origin: {
          900: "#193328",
          700: "#2B5745",
          500: "#477864"
        },
        ink: "#202020"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(42, 23, 17, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
