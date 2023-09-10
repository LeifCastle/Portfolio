"use client";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

export default function Portfolio() {
  //------Sets navbar button text color to be 'selected'
  function changeNavbarText(buttonNumber) {
    let navButtons = document.querySelectorAll(".nav");
    navButtons.forEach((button) => {
      button.classList.remove("text-navbarTextSelected");
      button.classList.add("text-white");
    });
    navButtons[buttonNumber].classList.remove("text-white");
    navButtons[buttonNumber].classList.add("text-navbarTextSelected");
  }

  //------Handles navbar background and buttons' text color depending on scroll location
  useEffect(() => {
    let portfolio = document.querySelector("#portfolio");
    let navbar = document.querySelector("#navbar");
    //---Sets the navbar's background type
    portfolio.addEventListener("scroll", () => {
      if (portfolio.scrollTop > 110) {
        if (portfolio.scrollTop > window.innerHeight) {
          navbar.classList.remove("bg-transparent");
          navbar.classList.add("bg-navbarBg");
        } else {
          navbar.classList.remove("bg-navbarBg");
          navbar.classList.add("bg-transparent");
        }
        //---Sets the navbar buttons' text color
        for (let i = 0; i < 6; i++) {
          if (
            portfolio.scrollTop > window.innerHeight * (i - 0.25) &&
            portfolio.scrollTop < window.innerHeight * (i + 1)
          ) {
            changeNavbarText(i);
          }
        }
      }
    });
  }, []);

  return (
    <main
      id="portfolio"
      className="bg-mainBg bg-cover w-[100vw] snap-y snap-mandatory h-screen overflow-y-scroll no-scrollbar scroll-smooth"
    >
      <Navbar changeNavbarText={changeNavbarText} />
      <section id="home" className="h-screen snap-start">
        <Home changeNavbarText={changeNavbarText} />
      </section>
      <section id="about" className="h-screen snap-start">
        <About />
      </section>
      <section id="resume" className="h-screen snap-start">
        <Resume />
      </section>
      <section id="projects" className="h-screen snap-start">
        <Projects />
      </section>
      <section id="contacts" className="h-screen snap-start">
        <Contacts />
      </section>
    </main>
  );
}
