/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          space: "var(--font-space)",
        },
        colors: {
          primary: "#0b1a3a",
        },
      },
    },
    plugins: [],
  };