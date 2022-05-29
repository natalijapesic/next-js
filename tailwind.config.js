module.exports = {
  mode:"jit",
  content: ["./{apps/social-network,libs}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
  },
  plugins: [],
};
