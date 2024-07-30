/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm' : '640px',
      // => @media (min-width: 1024px) { ... }
      't': '992px',
      // => @media (min-width: 992px) { ... }
      'd' : '1024px',
      // => @media (min-width: 1024px) { ... }
      
    },
    extend: {},
  },
  plugins: [],
}

