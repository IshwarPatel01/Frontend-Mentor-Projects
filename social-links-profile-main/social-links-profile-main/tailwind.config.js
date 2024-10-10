/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: 'hsl(75, 94%, 57%)',
        white: 'hsl(0, 0%, 100%)',
        gray: {
          700: 'hsl(0, 0%, 20%)',
          800: 'hsl(0, 0%, 12%)',
          900: 'hsl(0, 0%, 8%)',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], // Variable font
        'inter-thin': ['Inter Thin', 'sans-serif'],
        'inter-extralight': ['Inter ExtraLight', 'sans-serif'],
        'inter-light': ['Inter Light', 'sans-serif'],
        'inter-regular': ['Inter Regular', 'sans-serif'],
        'inter-medium': ['Inter Medium', 'sans-serif'],
        'inter-semibold': ['Inter SemiBold', 'sans-serif'],
        'inter-bold': ['Inter Bold', 'sans-serif'],
        'inter-extrabold': ['Inter ExtraBold', 'sans-serif'],
        'inter-black': ['Inter Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}