/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 120s linear infinite",
        "pulse-fast": "pulse 0.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
