/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        navbar: "#0e2d41",
        headerWeapons: "#0C4944",
        headerWeaponsSection: "#003B4F",
        headerTools: "#4E3727",
        headerToolsSection: "#F3D9B1",

        background: "#1c1917", // Very dark stone (Page BG)
        surface: "#292524", // Slightly lighter stone (Card BG)
      },
    },
  },
  plugins: [],
};
