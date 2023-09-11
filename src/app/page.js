"use client";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

export default function Portfolio() {
  //------Sets navbar button text color to be 'selected'
  function changeNavbarText(buttonNumber) {
    let navButtons = document.querySelectorAll(".nav");
    navButtons.forEach((button) => {
      if (button.id !== buttonNumber.toString()) {
        button.classList.remove("text-navbarTextSelected");
        button.classList.remove("text-navbarHover");
        button.classList.add("text-white");
      } else {
        button.classList.remove("text-white");
        button.classList.add("text-navbarTextSelected");
      }
    });
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
        //---Rather than just measuring by the window height (some sections such as contact are samller than the window, this measures by section height...window.innerHeight * 0.75 should really be some function between how tall a section is and the height of the window"
        let heightHome = document.querySelector("#home").offsetHeight;
        let heightAbout = document.querySelector("#about").offsetHeight;
        let heightProjects = document.querySelector("#projects").offsetHeight;
        let heightContact = document.querySelector("#contacts").offsetHeight;
        let sectionHeights = [
          heightHome,
          heightAbout,
          heightProjects,
          heightContact,
        ];
        let totalHeight = 0;
        let previousHeight = 0;
        let previous = 0;
        for (let i = 0; i < 4; i++) {
          totalHeight += sectionHeights[i];
          if (i !== 0) {
            previous = i - 1;
            previousHeight += sectionHeights[previous];
          }
          if (
            portfolio.scrollTop + window.innerHeight * 0.75 > previousHeight &&
            portfolio.scrollTop < totalHeight
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
      <section id="home" className="min-h-screen h-auto snap-start">
        <Home changeNavbarText={changeNavbarText} />
      </section>
      <section id="about" className="min-h-screen h-auto snap-start bg-aboutBg">
        <About />
      </section>
      <section id="projects" className="min-h-screen h-auto snap-start">
        <Projects />
      </section>
      <section id="contacts" className="h-auto snap-start bg-aboutBg">
        <Contacts />
      </section>
    </main>
  );
}
