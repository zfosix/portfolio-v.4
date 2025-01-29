import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"], // Dark mode berdasarkan kelas
  theme: {
    extend: {
      colors: {
        background: 'var(--background)', // Pastikan variabel ini ada di file CSS
        foreground: 'var(--foreground)', // Pastikan variabel ini ada di file CSS
      },
      borderRadius: {
        lg: 'var(--radius)', // Pastikan variabel ini ada di file CSS
        md: 'calc(var(--radius) - 2px)', 
        sm: 'calc(var(--radius) - 4px)', 
      }
    }
  },
  plugins: [],
};

export default config;
