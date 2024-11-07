import { nextui } from '@nextui-org/react';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        steam: {
          '0%, 100%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '400% 0%' },
        },
      },
    },
    screens: {
      md: '768px',
      lg: '1024px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui',
      addCommonColors: false,
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {
            background: 'white',
            primary: {
              DEFAULT: '#CA0100',
            },
          },
        },
        dark: {
          layout: {},
          colors: {
            background: 'white',
            primary: {
              DEFAULT: '#CA0100',
            },
          },
        },
      },
    }),
  ],
};
