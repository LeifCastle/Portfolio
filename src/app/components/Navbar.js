"use client";

export default function Navbar({ changeNavbarText }) {
  function handleNavigation(section, sectionNumber) {
    document.querySelector(`#${section}`).scrollIntoView();
    changeNavbarText(sectionNumber);
  }

  return (
    <div
      id="navbar"
      className="flex justify-center items-center gap-12 sticky top-0 h-navbarHeight bg-transparent font-bold font-navbar transition duration-[800ms] ease-in-out delay-100"
    >
      <a
        className="nav text-navbarTextSelected tracking-wider transition-colors"
        onClick={() => handleNavigation("home", 0)}
      >
        Home
      </a>
      <a
        className="nav text-white tracking-wide transition-colors"
        onClick={() => handleNavigation("about", 1)}
      >
        About
      </a>
      <a
        className="nav text-white tracking-wide transition-colors"
        onClick={() => handleNavigation("resume", 2)}
      >
        Resume
      </a>
      <a
        className="nav text-white transition-colors"
        onClick={() => handleNavigation("projects", 3)}
      >
        Projects
      </a>
      <a
        className="nav text-white transition-colors"
        onClick={() => handleNavigation("contacts", 4)}
      >
        Contact
      </a>
    </div>
  );
}
