/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "9999px",
      md: "10000px",
      lg: "10001px",
      xl: "10002px",
      "2xl": "10003px"
    },
    extend: {
      colors: {
        midnight: "#07152E",
        deepblue: "#102A56",
        royal: "#2457A7",
        sky: "#89C7F5",
        ice: "#DDF2FF",
        cream: "#FFF9EE",
        silver: "#D9E3F0",
        lavender: "#C8B8FF"
      },
      fontFamily: {
        handwriting: ["Caveat", "Dancing Script", "cursive"],
        serifSoft: ["Cormorant Garamond", "Playfair Display", "serif"],
        rounded: ["Nunito", "Poppins", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 35px rgba(137, 199, 245, 0.35)",
        paper: "0 18px 45px rgba(0, 0, 0, 0.22)"
      }
    }
  },
  plugins: []
};
