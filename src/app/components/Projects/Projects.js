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
      overview:
        "Never forget another birthday! Birthday Buzz is a MERN stack application that sends you email reminders when it is someones birthday. Just add your friends and family to your buzz list and we will automatically send you a customized reminder when their birthday is coming up or on the day of ",
      thumbnail: "bg-[url('../../public/BirthdayBuzz_Thumbnail.png')]",
    },
    {
      title: "Colorz",
      overview:
        "Colorz is a theme creation tool allowing users to quickly create a wireframe of their website with text and background color optimization. Users can visualize how color choices would look on their website through the wireframe's representation. Note: Thumbnail shows an example use where a user recreates the theme for Colorz",
      thumbnail: "bg-[url('../../public/Colorz_Thumbnail.png')]",
    },
    {
      title: "Lava Run",
      overview:
        "LavaRun is a simple game where you control a lava creature and move him between three lanes to choose different shields that increase or decrease your shields. Do the math to figure out how get enough shields to survive the lava!",
      thumbnail: "bg-[url('../../public/LavaRun_Thumbnail.png')]",
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
