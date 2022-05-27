module.exports = {
  darkMode: "class",
  content: ["./{apps/social-network,libs}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
