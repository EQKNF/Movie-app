import fluid, { extract } from "fluid-tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", extract],
  theme: {
    extend: {
      scrollBehavior: ["responsive"],
    },
  },
  /*eslint-env node*/
  plugins: [fluid],
};
