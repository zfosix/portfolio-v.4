import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"], // Menggunakan class-based dark mode
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Menggunakan variabel CSS
        foreground: "var(--foreground)", // Menggunakan variabel CSS
      },
      borderRadius: {
        lg: "var(--radius)", // Menggunakan variabel CSS
        md: "calc(var(--radius) - 2px)", // Menggunakan kalkulasi CSS
        sm: "calc(var(--radius) - 4px)", // Menggunakan kalkulasi CSS
      },
      fontFamily: {
        sora: ["var(--soraSans-font)", ...fontFamily.sans], // Font Sora
        robotoCondensed: ["var(--robotoCondensed-font)", ...fontFamily.sans], // Font Roboto Condensed
        inter: ["var(--inter-font)", ...fontFamily.sans], // Font Inter
      },
    },
  },
  plugins: [tailwindScrollbar], // Menambahkan plugin scrollbar
};

export default config;