/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        party: {
          green: "#1a5c3a",
          gold: "#f0a500",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald", "light"],
  },
};

