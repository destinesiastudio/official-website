/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'red': {
          500: '#9b3515',
          600: '#76250b',
        },
        'black': {
          600: '#2f3031'
        }
      },
    },
  },
  plugins: [],
}
