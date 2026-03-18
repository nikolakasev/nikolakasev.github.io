/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#0057B7',
          secondary: '#4A90E2'
        },
        orange: {
          primary: '#FF9500',
          secondary: '#FFB74D'
        },
        neutral: {
          white: '#FAEBD7',
          dark: '#333333'
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Lato', 'sans-serif']
      },
      fontSize: {
        'body': ['16px', '24px'],
        'body-lg': ['18px', '28px'],
        'heading': ['22px', '32px']
      },
      height: {
        'header': '15vh',
        'hero': 'auto',
        'footer': 'auto'
      }
    }
  },
  plugins: [],
};
