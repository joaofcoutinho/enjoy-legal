import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        literata: ["Literata", "Georgia", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#B8935A",
          light: "#D4B07A",
          dark: "#8A6A38",
        },
        cream: {
          DEFAULT: "#F5F0E8",
          dark: "#EDE6D6",
        },
        navy: {
          DEFAULT: "#0F1535",
          light: "#1A2045",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          800: "#111111",
          700: "#1A1A1A",
          600: "#222222",
        },
      },
    },
  },
  plugins: [],
};

export default config;
