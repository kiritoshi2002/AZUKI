/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        azure: '#007FFF',
        brightColor: "#1ec6e1",
        backgroundColor: "#b7bca9",
        lightText: "#959595",
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};

