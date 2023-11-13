/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],

  content: ["node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
};
