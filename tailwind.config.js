/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainBg: 'url("./public/images/main_background.jpg")',
      },
      spacing: {
        navbarHeight: "40px",
      },
      colors: {
        navbarBg: "#333232",
        navbarTextSelected: "#A3560F",
      },
    },
  },
  plugins: [],
};
