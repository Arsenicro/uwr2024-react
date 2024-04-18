import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        endeavour: {
          50: "#f1f6fe",
          100: "#e2ecfc",
          200: "#bfd8f8",
          300: "#86b9f3",
          400: "#4695ea",
          500: "#1e77d9",
          600: "#0f54a9",
          700: "#0f4a95",
          800: "#103f7c",
          900: "#133667",
          950: "#0d2244",
        },
        red: {
          DEFAULT: colors.red[500],
        },
      },
    },
  },
  plugins: [],
};
