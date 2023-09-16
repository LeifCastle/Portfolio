"use client";

export default function Navbar({ changeNavbarText }) {
  function handleNavigation(section, sectionNumber) {
    document.querySelector(`#${section}`).scrollIntoView();
    changeNavbarText(sectionNumber);
  }

  function handleHover(e) {
    if (e.target.classList.contains("text-white")) {
      e.target.classList.add("text-navbarHover");
    }
  }
  function handleNoHover(e) {
    e.target.classList.remove("text-navbarHover");
  }

  return (
    <div
      id="navbar"
      className="z-10 flex justify-center items-center gap-6 sm:gap-12 sticky top-0 h-navbarHeight bg-transparent font-bold font-navbar transition duration-[800ms] ease-in-out delay-100"
    >
      <a
        id="0"
        className="nav text-navbarTextSelected tracking-wider transition-colors hover:cursor-pointer"
        onClick={() => handleNavigation("home", 0)}
        onMouseOver={handleHover}
        onMouseOut={handleNoHover}
      >
        Home
      </a>
      <a
        id="1"
        className="nav text-white tracking-wide transition-colors hover:cursor-pointer"
        onClick={() => handleNavigation("about", 1)}
        onMouseOver={handleHover}
        onMouseOut={handleNoHover}
      >
        About
      </a>
      <a
        id="2"
        className="nav text-white transition-colors hover:cursor-pointer "
        onClick={() => handleNavigation("projects", 2)}
        onMouseOver={handleHover}
        onMouseOut={handleNoHover}
      >
        Projects
      </a>
      <a
        id="3"
        className="nav text-white transition-colors hover:cursor-pointer "
        onClick={() => handleNavigation("contacts", 3)}
        onMouseOver={handleHover}
        onMouseOut={handleNoHover}
      >
        Contact
      </a>
    </div>
  );
}
