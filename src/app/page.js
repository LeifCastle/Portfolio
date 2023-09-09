"use client";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

export default function Portfolio() {
  //------Changes the navbar's background depending on scroll location
  useEffect(() => {
    let portfolio = document.querySelector("#portfolio");
    let navbar = document.querySelector("#navbar");
    portfolio.addEventListener("scroll", () => {
      if (portfolio.scrollTop > window.innerHeight) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-navbarBg");
      } else {
        navbar.classList.remove("bg-navbarBg");
        navbar.classList.add("bg-transparent");
      }
    });
  });

  return (
    <main
      id="portfolio"
      className="bg-mainBg bg-cover w-[100vw] snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
    >
      <Navbar />
      <section id="home" className="h-screen snap-start">
        <Home />
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
