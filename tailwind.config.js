/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '0' : '0px 4px 10px 2px rgba(0, 0, 0, 0.50);'
      },
      borderWidth: {
        '1' : '1.5px'
      },
    colors:{
      lightpurple: '#EDE8F5',
      lightpurple2: '#DED5EB',
      darkpurple: '#271742',
      dkpurple2: '#32234B',
      magenta: '#982176',
      lightmagenta: '#B55198',
      lightgreen: '#D6D385',
      lightorange: '#F4C9B5',
    },
    padding:{
      '50px': '3em',
    },
    },
  },
  plugins: [],
}
