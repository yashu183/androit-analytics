/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '30%': '30%',
        '23.5%': '23.5%'
      },
      colors: {
        primary: {
          DEFAULT: '#FFD700',
          dark: '#FFC700',
          light: '#FFE44D'
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          dark: '#000000',
          light: '#333333'
        },
        dark: {
          DEFAULT: '#0B0F17',
          light: '#1A1F2C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
