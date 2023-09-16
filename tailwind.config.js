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
      screens: {
        mobile: { min: "0px", max: "640px" },
        tablet: { min: "640px", max: "768px" },
        lgMobile: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        mainBg: 'url("../../public/main_background.jpg")',
        linkedInLogoWhite: 'url("../../public/linkedInLogoWhite.svg")',
        linkedInLogoBlue: 'url("../../public/linkedInLogoBlue.svg")',
        githubLogoWhite: 'url("../../public/githubLogoWhite.svg")',
        githubLogoBlue: 'url("../../public/githubLogoBlue.svg")',
        phone: 'url("../../public/phone.svg")',
        email: 'url("../../public/email.svg")',
        location: 'url("../../public/location.svg")',
        downArrowWhite: 'url("../../public/downArrowWhite.svg")',
        downArrowGreen: 'url("../../public/downArrowGreen.svg")',
        profile: 'url("../../public/profile.png")',
      },
      spacing: {
        navbarHeight: "40px",
      },
      colors: {
        navbarBg: "#333232",
        aboutBg: "#2B2B2B",
        projectsBg: "#6D6C6C",
        navbarTextSelected: "#A3560F",
        navbarHover: "#f4ba85",
        grayText: "#A8A8A8",
        button1: "#444444",
        skillsBg: "#9E9C9C",
      },
      fontFamily: {
        navbar: ["Source\\ Code\\ Pro", "cursive"],
        regular: ["Open\\ Sans", "cursive"],
        heading: ["Josefin\\ Sans", "cursive"],
      },
    },
  },
  plugins: [],
};
