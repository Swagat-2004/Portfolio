/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0D1117",
        surface: "#161B22",
        surfacehi: "#1F2733",
        border: "#2B3440",
        ink: "#E6EDF3",
        muted: "#8B949E",
        keyword: "#58A6FF",
        string: "#7EE787",
        tag: "#F0883E",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
