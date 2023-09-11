import { useEffect, useState } from "react";
import Skill from "./Skill";

export default function About() {
  let skillBase = [
    "JavaScript",
    "Python",
    "Rest API",
    "React",
    "Next",
    "Django",
    "NodeJS",
    "ExpressJS",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Mongoose",
    "Sequelize",
    "Git",
    "Heroku",
    "Selenium",
    "Postman",
  ];
  let skills = skillBase.map((skill) => {
    return <Skill skill={skill} key={skill} />;
  });

  return (
    <div className="pt-navbarHeight flex gap-[100px]">
      <img className="bg-profile w-[15vw] h-[15vw] ml-[7vw] mt-[10vh] rounded-full bg-cover"></img>
      <div className="flex flex-col w-[60vw] mt-[10vh]">
        <p className="text-3xl font-heading">About Me</p>
        <p className="ml-2 mt-4 text-grayText font-regular tracking-wide">
          I'm a full stack software engineer with a greater focus on the front
          end. Initially just a better way to make money, coding has evolved
          into a hobby I'm quite passionate about. Nothing is more satisfying
          than finding a problem or need and then taking a solution from the
          drawingboard into reality. With a background in construction, customer
          support, and leadership, I've developed an impeccable work ethic,
          effective communication skills, and a constant drive to learn. I began
          my career transition early 2023 and six months later graduated from
          General Assembly's software engineering immersive with over 400 hours
          of hands-on learing and four major projects under my belt. While
          there's always more to learn, I'm proficient in multiple languages,
          frameworks, libraries, and databases, most notably MERN stack. Highly
          self-motived and constantly driven to do more and do better, I'm
          looking for my next opportuntity to make a difference in the tech
          industry with my unique skillset and drive.
        </p>
        <p className="text-3xl mt-10 font-heading">Tech Stack</p>
        <div className="flex flex-wrap">{skills}</div>
        <div className="flex gap-10 w-fullfont-heading text-lg mb-[10vh]">
          <div className="flex items-center mt-10 bg-button1 hover:bg-white hover:text-black rounded-md px-3 h-[50px] transition duration-[300ms] ease-linear">
            <a href="/Leifur_Castle_Resume.pdf" download>
              Download Resume
            </a>
          </div>
          <div className="flex items-center mt-10 bg-button1 hover:bg-white hover:text-black rounded-md px-3 h-[50px] ">
            <a href="/Leifur_Castle_Resume.pdf" target="_blank">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
