// tailwind.config.js
import fontFamily from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-rubik)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
