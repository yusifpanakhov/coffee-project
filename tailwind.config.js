/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
  theme: {
  extend: {
    colors: {
      beige: {
        100: '#F5F0E9',
      },
    },
  },
}

};
