"use client";

export default function Navbar() {
  function handleNavigation(section, e) {
    document.querySelector(`#${section}`).scrollIntoView();
    let navButtons = document.querySelectorAll(".nav");
    navButtons.forEach((button) => {
      button.classList.remove("text-navbarTextSelected");
      button.classList.add("text-white");
    });
    e.target.classList.remove("text-white");
    e.target.classList.add("text-navbarTextSelected");
  }

  return (
    <div
      id="navbar"
      className="flex justify-center items-center gap-12 sticky top-0 h-navbarHeight bg-transparent transition duration-[800ms] ease-in-out delay-100"
    >
      <a
        className="nav text-white"
        onClick={(e) => handleNavigation("home", e)}
      >
        Home
      </a>
      <a
        className="nav text-white"
        onClick={(e) => handleNavigation("about", e)}
      >
        About
      </a>
      <a
        className="nav text-white"
        onClick={(e) => handleNavigation("resume", e)}
      >
        Resume
      </a>
      <a
        className="nav text-white"
        onClick={(e) => handleNavigation("projects", e)}
      >
        Projects
      </a>
      <a
        className="nav text-white"
        onClick={(e) => handleNavigation("contacts", e)}
      >
        Contact
      </a>
    </div>
  );
}
