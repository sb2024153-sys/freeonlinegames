/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_games/**/*.{html,md}',
    './*.{html,md}',
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#2cb6ff',
        'candy-green': '#00ff87',
      }
    },
  },
  plugins: [],
}
