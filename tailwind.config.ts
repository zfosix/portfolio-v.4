import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"], 
  theme: {
    extend: {
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)", 
      },
      borderRadius: {
        lg: "var(--radius)", 
        md: "calc(var(--radius) - 2px)", 
        sm: "calc(var(--radius) - 4px)", 
      },
      fontFamily: {
        sora: ["var(--soraSans-font)", ...fontFamily.sans], 
        robotoCondensed: ["var(--robotoCondensed-font)", ...fontFamily.sans], 
        inter: ["var(--inter-font)", ...fontFamily.sans], 
      },
    },
  },
  plugins: [tailwindScrollbar], 
};

export default config;