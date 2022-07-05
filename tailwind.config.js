/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'smMaxWidth': '480px',
        'mdMaxWidth': '590px',
        'lgMaxWidth': '750px',
        'middleMaxWidth': '800px',
      }
    },
  },
  plugins: [],
}