const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      "2xs": "400px",
      xs: "470px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1140px",
      "2xl": "1280px",
      "3xl": "1320px",
      "4xl": "1400px",
      "5xl": "1480px",
    },
    extend: {
      colors: {
        bg: "#FCFCFC",
        primary: "#00858E",
        primaryHover: "#1bb1bb",
        secondary: "#00858E0D",
        text1: "#151F25",
        text2: "#FCFCFC",
        text3: "#717171",
        border1: "#C3C3C3",
      },
    }, 
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
