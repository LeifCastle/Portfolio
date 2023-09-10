/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      variants: {
        transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
      },
      backgroundImage: {
        mainBg: 'url("../../public/main_background.jpg")',
        linkedInLogoWhite: 'url("../../public/linkedInLogoWhite.svg")',
        linkedInLogoBlue: 'url("../../public/linkedInLogoBlue.svg")',
        githubLogoWhite: 'url("../../public/githubLogoWhite.svg")',
        githubLogoBlue: 'url("../../public/githubLogoBlue.svg")',
        downArrowWhite: 'url("../../public/downArrowWhite.svg")',
        downArrowGreen: 'url("../../public/downArrowGreen.svg")',
      },
      spacing: {
        navbarHeight: "40px",
      },
      colors: {
        navbarBg: "#333232",
        navbarTextSelected: "#A3560F",
        grayText: "#A8A8A8",
      },
      fontFamily: {
        display: ["Source\\ Code\\ Pro", "cursive"],
      },
    },
  },
  plugins: [],
};
