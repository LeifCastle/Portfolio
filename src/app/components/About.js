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
    <div className="pt-navbarHeight flex justify-center gap-[100px]">
      <img className="hidden md:block bg-profile w-[15vw] h-[15vw] ml-10 mt-[10vh] rounded-full bg-cover"></img>
      <div className="flex flex-col mobile:mx-5 tablet:mx-10 md:w-[60vw] mt-10 md:mt-[10vh] mr-10">
        <div className="flex justify-evenly items-center">
          <img className="md:hidden bg-profile w-[15vw] h-[15vw] rounded-full bg-cover"></img>
          <p className="text-3xl font-heading text-white">About Me</p>
        </div>
        <p className="ml-2 mt-4 text-grayText font-regular tracking-wide">
          I&apos;m a full stack software engineer with a greater focus on the
          front end. Initially just a better way to make money, coding has
          evolved into a hobby I&apos;m quite passionate about. Nothing is more
          satisfying than finding a problem or need and then taking a solution
          from the drawingboard into reality. With a background in construction,
          customer support, and leadership, I&apos;ve developed an impeccable
          work ethic, effective communication skills, and a constant drive to
          learn. I began my career transition early 2023 and six months later
          graduated from General Assembly&apos;s software engineering immersive
          with over 400 hours of hands-on learing and four major projects under
          my belt. While there&apos;s always more to learn, I&apos;m proficient
          in multiple languages, frameworks, libraries, and databases, most
          notably MERN stack. Highly self-motived and constantly driven to do
          more and do better, I&apos;m looking for my next opportuntity to make
          a difference in the tech industry with my unique skillset and drive.
        </p>
        <p className="text-3xl mt-10 font-heading text-white">Tech Stack</p>
        <div className="flex flex-wrap">{skills}</div>
        <div className="flex gap-10 w-fullfont-heading text-lg mb-[10vh] text-center">
          <div className="mobile:h-[60px] flex items-center mt-10 bg-button1 hover:bg-white hover:text-black rounded-md px-3 h-[50px] transition duration-[300ms] ease-linear">
            <a href="/Leifur_Castle_Resume.pdf" download>
              Download Resume
            </a>
          </div>
          <div className="mobile:h-[60px] flex items-center mt-10 bg-button1 hover:bg-white hover:text-black rounded-md px-3 h-[50px] ">
            <a href="/Leifur_Castle_Resume.pdf" target="_blank">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
