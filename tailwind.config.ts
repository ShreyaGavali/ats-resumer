import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}", // 👈 required for HeroUI
  ],
  theme: {
    extend: {},
  },
   plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#2563eb", // Tailwind blue-600
            secondary: "#9333ea", // Tailwind purple-600
          },
          layout: {
            radius: {
              small: "6px",
              medium: "12px",
              large: "18px",
            },
          },
        },
        dark: {
          colors: {
            primary: "#22d3ee", // cyan
            secondary: "#facc15", // yellow
          },
        },
      },
    }),
  ],
};

export default config;
