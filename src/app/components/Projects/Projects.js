import ProjectThumbnail from "./ProjectThumbnail";
import ProjectDescription from "./ProjectDescription";

import { useState } from "react";

export default function Projects() {
  const [current, setCurrent] = useState(0);

  //        Features Email verification required for all user accounts (no
  // spam/malicious usage) Quick & Simple process to add friends and family
  // to your "buzz list" (reminder list) Choose when you want to be reminded
  // Create a custom reminder message

  let projectBase = [
    {
      title: "Birthday Buzz",
      link: "http://www.birthdaybuz.net",
      overview:
        "Never forget another birthday! Birthday Buzz is a MERN stack application that sends you email reminders when it is someone's birthday. Just add your friends and family to your buzz list and we will automatically send you a customized reminder when their birthday is coming up or on the day of ",
      thumbnail: "bg-[url('../../public/BirthdayBuzz_Thumbnail.png')]",
      details: [
        "Frontend built with Next and Javascript, user accounts require email verification implemented with Twilio's API",
        "Back-end RESTful API server built with Node, Express.js, and MongoDB Atlas cloud database",
        "Utilized MongoDB & Mongoose to allow users to save friends and family to their 'Buzz List'",
        "Integrated Heroku Cron To Go to run daily scripts fulfilling each users Buzz List reminder requests",
        "Automatic emailing implemented with SendGrid’s service API",
        "Frontend to backend seamless communication achieved with Axios HTTP requests, often sent with accompanying data in JSON format, and user authentication implemented with passport.js",
        "Collaborated with the team as a Git Master using Git forking workflow procedures and frequent commits",
        "Successfully deployed backend and frontend to Heroku with a custom domain (www.birthdaybuz.net)",
      ],
      techStack: [
        "JavaScript",
        "Rest API",
        "Next.js",
        "Node",
        "Express",
        "Tailwind CSS",
        "MongoDB",
        "Git",
        "Heroku",
      ],
    },
    {
      title: "Colorz",
      link: "http://www.colorznow.com",
      overview:
        "Colorz is a theme creation tool allowing users to quickly create a wireframe of their website with text and background color optimization. Users can visualize how color choices would look on their website through the wireframe's representation. Thumbnail shows an example use where a user recreates the theme for Colorz",
      thumbnail: "bg-[url('../../public/Colorz_Thumbnail.png')]",
      details: [
        "Utilized Next and Javascript to create a dynamic front-end application boasting user accounts, wireframing tools, color and styling options, and user theme to CSS color pallet exportation",
        "Employed React hooks to create drag & drop resizable widgets capable of quickly wireframing an existing or new website’s basic layout and text",
        "Full background, text, and font customization enables users to immediately visualize how color choices would look on their website through the wireframe’s representation",
        "Implemented a back-end RESTful API server using Node and Express.js and an integrated MongoDB database",
        "Enabled users to save themes to a User model of multi-level embedded documents with MongoDB & Mongoose",
        "Achieved seamless front to backend communication with Axios and user authentication with passport.js",
        "Collaborated with the team as a Git Master using Git forking workflow procedures and frequent commits",
        "Successfully deployed backend and frontend to Heroku with a custom domain (www.colorznow.com)",
      ],
      techStack: [
        "JavaScript",
        "Rest API",
        "Next.js",
        "Node",
        "Express",
        "Tailwind CSS",
        "MongoDB",
        "Git",
        "Heroku",
      ],
    },
    {
      title: "Lava Run",
      link: "https://lavarunn.netlify.app/",
      overview:
        "LavaRun is a simple game where you control a lava creature and move him between three lanes to choose different shields that increase or decrease your shields. Do the math to figure out how get enough shields to survive the lava!",
      thumbnail: "bg-[url('../../public/LavaRun_Thumbnail.png')]",
      details: [
        "Used HTML canvas to represent an infinite 2D world loop with obstacles, powerups, and powerdowns",
        "Wireframed and planned UI design of application using Excalidraw and used Pix2D to create 20+ image sprites",
        "Implemented ES6 tagged template literals with CSS styled-components to provide style and flexbox layout",
        "Leveraged vanilla Javascript, CSS, and HTML5 to organize and display the visual aspects",
        "Successfuly deployed to Netlify",
      ],
      techStack: [
        "JavaScript",
        "HTML",
        "CSS",
        "Node",
        "Express",
        "Netlify",
        "Git",
      ],
    },
  ];

  function changeProject(direction, e) {
    e.target.classList.add("opacity-40");
    setTimeout(() => {
      e.target.classList.remove("opacity-40");
    }, 300);
    if (direction === "next") {
      if (current + 1 > Object.keys(projectBase).length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    } else {
      if (current - 1 < 0) {
        setCurrent(Object.keys(projectBase).length - 1);
      } else {
        setCurrent(current - 1);
      }
    }
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col items-center mr-10">
        <div className="h-[100px] flex items-end">
          <div
            id="downArrow"
            className="w-[90px] h-[90px] bg-contain bg-downArrowWhite hover:bg-downArrowGreen hover:w-[100px] hover:h-[100px] hover:cursor-pointer origin-center rotate-180  transition-{opacity} duration-[250ms]"
            onClick={(e) => changeProject("prev", e)}
          ></div>
        </div>
        <ProjectThumbnail
          title={projectBase[current].title}
          thumbnail={projectBase[current].thumbnail}
          link={projectBase[current].link}
        />
        <div className="h-[100px]">
          <div
            id="downArrow"
            className="w-[90px] h-[90px] bg-contain bg-downArrowWhite hover:bg-downArrowGreen hover:w-[100px] hover:h-[100px] hover:cursor-pointer origin-center  transition-{opacity}  duration-[250ms]"
            onClick={(e) => changeProject("next", e)}
          ></div>
        </div>
      </div>
      <ProjectDescription project={projectBase[current]} />
    </div>
  );
}
