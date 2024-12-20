import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaPurple: "#1b263b",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#415a77",
        lamaYellowLight: "#FEFCE8",
        newLightBlue: "#778da9",
        newDarkBlue: "#1b263b",
        newGray: "#e0e1dd",
        secondBlue: "#415a77",
        // Added second blue to lama yellow      lamaYellowLight: "#FEFCE8",
        // Added dark blue to       lamaPurple: "#CFCEFF"   #1b263b,



      }
    },
  },
  plugins: [],
};
export default config;
