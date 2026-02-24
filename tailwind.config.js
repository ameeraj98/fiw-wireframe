/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Defining the custom brand color required for the dark theme
        'fiw-black': '#050505', 
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"], // Enforces dark mode [cite: 27, 29]
  },
}