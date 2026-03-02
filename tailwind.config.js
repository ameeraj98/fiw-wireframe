/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    // 1. COLORS OUTSIDE EXTEND = TOTAL OVERRIDE
    colors: ({ colors }) => ({
      ...colors, // Keep all other default colors (slate, blue, etc.)
      'fiw-black': '#050505',
    }),
    extend: {
      // Keep other non-color extensions here
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#3f983f", // This will now actually work
        },
      },
    ],
  },
}