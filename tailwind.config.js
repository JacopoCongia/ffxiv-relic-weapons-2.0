/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 'bebas' is the class name suffix (font-bebas)
        // 'Bebas Neue' must match the exact name from Google Fonts
        bebas: ['"Bebas Neue"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
