import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Colors here and using default colors
      // Primary & Secondary colors

      // COLORS PALLETTE FOR APP
      colors: {
        primary: {
          "50": "#fcf3f6",
          "100": "#fbe8f0",
          "200": "#f8d2e1",
          "300": "#f4adc8",
          "400": "#ef94b4",
          "500": "#e15381",
          "600": "#cf335d",
          "700": "#b32346",
          "800": "#94203b",
          "900": "#7c1f34",
        },
        secondary: {
          "50": "#f0f8ff",
          "100": "#e0f0fe",
          "200": "#bae2fd",
          "300": "#7ccbfd",
          "400": "#37b1f9",
          "500": "#0d97ea",
          "600": "#016fb9",
          "700": "#025fa2",
          "800": "#065186",
          "900": "#0c446e",
        },
        white: "#FFFFFF",
        black: "#1f1f1f",

        // Default colors

        // Base Color Themes
        heading: "1f1f1f",
        paragraphe: "4b5563",
        label: "#1f1f1f",
        placeholder: "#9ca3af",
        table: colors.gray[900],
        backgroundDisable: "#F3F4F6",
        border: "#E5E7EB",
        "input-border": colors.gray[300],
        icon: colors.gray[500],
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        sylvaincodes: "Arial",
        sylvaincodesTwo: "Kanit",
      },
      fontSize: {},
      fontWeight: {},
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
