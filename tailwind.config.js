/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mini': '350px',
      'sm': '576px',
      'md': '900px',
      'lg': '1280px',
    },
    fontFamily: {
      display: ['Pally', 'Comic Sans MS', 'sans-serif'],
      body: ['Pally', 'Comic Sans MS', 'sans-serif'],
    },
    colors: {
      primary: {
        50: '#FDFFFC',
        100: '#22223B',
        200: '#4A4E69',
        300: '#D9D9D9',
        400: '#fb7185',
        500: '#f43f5e',
        600: '#e11d48',
        700: '#be123c',
        800: '#9f1239',
        900: '#881337',
      },
      secondary: {
        50: '#222222',
        100: '#b6acb4',
        200: '#C9ADA7',
        300: '#F2E9E4',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
    },
    extend: {
    backgroundImage: {
      'elon' : 'url("@/imgs/portrait-background.svg")'
    },
    dropShadow: {
      '3xl': '0 0 70px rgb(0 0 0 / 0.45)',
    },
    animation: {
      fadein_left: 'fadein_left 1s ease-in-out',
      fadeout_left: 'fadein_left 1s ease-in-out',
      fadein_right: 'fadein_right 1s ease-in-out',
      fadein_bottom: 'fadein_bottom 1s ease-in-out',
      color: 'color 15s infinite ease-in-out',
      shadow: 'shadow 5s infinite alternate',
    },
    keyframes: {
        fadein_left: {
          '0%': { transform: 'translateX(-100rem)' },
          '80%': { transform: 'translateX(0rem)' },
          '85%': { transform: 'translateX(-1rem)'},
          '100%': { transform: 'translateX(0rem)'},
        },
        shadow: {
          '0%': { filter: 'drop-shadow(0 0 70px rgb(0 0 0 / 0.85))' },
          '25%': {  filter: 'drop-shadow(0 0 70px rgb(0 0 0 / 0.75))' },
          '50%': { filter: 'drop-shadow(0 0 70px rgb(0 0 0 / 0.65))' },
          '75%': { filter: 'drop-shadow(0 0 70px rgb(0 0 0 / 0.55))' },
          '100%': { filter: 'drop-shadow(0 0 70px rgb(0 0 0 / 0.45))' },
        },
        color: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '25%': {  filter: 'hue-rotate(90deg)' },
          '50%': { filter: 'hue-rotate(180deg)' },
          '75%': { filter: 'hue-rotate(360deg)' },
          '100%': { filter: 'hue-rotate(720deg)' },
        },
        fadeout_left: {
          '0%': { transform: 'translateX(0rem)' },
          '80%': { transform: 'translateX(-1rem)' },
          '85%': { transform: 'translateX(0rem)'},
          '100%': { transform: 'translateX(-200rem)'},
        },
        fadein_right: {
          '0%': { transform: 'translateX(500rem)' },
          '80%': { transform: 'translateX(0rem)' },
          '85%': { transform: 'translateX(1rem)'},
          '100%': { transform: 'translateX(0rem)'},
        },
        fadein_bottom: {
          '0%': { transform: 'translateY(500rem)' },
          '80%': { transform: 'translateY(0rem)' },
          '85%': { transform: 'translateY(1rem)'},
          '100%': { transform: 'translateY(0rem)'},
        }
      }
    }
  },
  darkMode: 'media',
  plugins: [],
}
