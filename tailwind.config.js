/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#003366",
        secondary: "#FFCC00"
      }
    },
    container: {
      center: true,  
      padding: {
        default : "20px",
        md : "40px",
      }
    }
  },
  plugins: [],
}

