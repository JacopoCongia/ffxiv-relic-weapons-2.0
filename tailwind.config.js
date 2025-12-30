/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        "dark-teal": {
          50: "#e5f9ff",
          100: "#ccf2ff",
          200: "#99e6ff",
          300: "#66d9ff",
          400: "#33ccff",
          500: "#00bfff",
          600: "#0099cc",
          700: "#007399",
          800: "#004d66",
          900: "#002633",
          950: "#001b24",
        },
        navbar: "#0e2d41",
        headerTools: "#3A5A40",
        headerToolsSection: "#344e41",
        headerToolsText: "#DAD7CD",
        headerToolsTextPatch: "#A3B18A",

        background: "#1c1917", // Very dark stone (Page BG)
        surface: "#292524", // Slightly lighter stone (Card BG)
      },
    },
  },
  plugins: [],
};
