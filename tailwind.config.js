/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        dark_gray: '#6E6E6E',
        white: '#FFFFFF',
        blue: '#3363ED',
        blue_gray: '#F2F5F7',
        blur_gray: '#F1F1F2BF',
        red: '#FE0135',
      },
      fontSize: {
        title1: '22px',
        title2: '16px',
        title3: '16px',
        title4: '16px',
        body1: '14px',
        body2: '14px',
        body3: '14px',
        body4: '12px',
        body5: '12px',
        button: '12px',
      },
      lineHeight: {
        title1: '145%',
        title2: '130%',
        title3: '135%',
        title4: '135%',
        body1: '130%',
        body2: '140%',
        body3: '130%',
        body4: '130%',
        body5: '130%',
        button: '135%',
      },
    },
  },
  plugins: [],
};
