/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace'],
        lobster: ['"Lobster"', 'cursive'],
        questrial: ['"Questrial"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

