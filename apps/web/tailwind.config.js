/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    // using https://github.com/necolas/normalize.css replace for better compatibility
    preflight: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
