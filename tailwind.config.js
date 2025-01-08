/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0056D6",
        // 'primary': '#19191a',
        secondary: "#333333",
        // 'secondary': '#5081a1',
        common: "#FF7A00",
      },
      boxShadow: {
        large: "0px 0px 30px 10px",
      },
    },
  },
  plugins: [],
};
