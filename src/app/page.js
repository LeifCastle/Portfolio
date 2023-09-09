import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Portfolio() {
  return (
    <main className="bg-mainBg bg-cover w-[100vw] snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
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

//Make things be their own compoent of nav and use .scrollIntoView() from document.find
