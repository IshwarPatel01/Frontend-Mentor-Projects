/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow : "hsl(47, 88%, 63% )",
        gray : {
          500 : "hsl(0, 0%, 42%)",
          950 : "hsl(0, 0%, 7%)"
        }
      },
      fontFamily : {
        "figtree" : ["Figtree", "sans-serif"],
         //variable font
        "figtree-extrabold" : ["Figtree ExtraBold"],
        "Figtree-Semibold" : ["Figtree SemiBold"]
      }
    },
  },
  plugins: [],
}