"use client";

import { useRef } from "react";

export default function Home({ changeNavbarText }) {
  const hinting = useRef(false); //Keeps track of whether or not scroll capabilities are currently being exhibited

  //------Scrolls to about page when down arrow is clicked
  function scrollToAbout() {
    hinting.current = false;
    document.querySelector("#portfolio").classList.add("snap-y");
    document.querySelector("#downArrow").classList.remove("absolute");
    document.querySelector("#downArrow").classList.remove("bottom-[20vh]");
    document.querySelector("#about").scrollIntoView();
    changeNavbarText(1);
  }

  //------Exhibits scrolling possibilities for user
  function scrollHint() {
    if (!hinting.current) {
      hinting.current = true;
      document.querySelector("#downArrow").classList.add("absolute");
      document.querySelector("#downArrow").classList.add("bottom-[20vh]");
      document.querySelector("#portfolio").classList.remove("snap-y");
      document.querySelector("#portfolio").scrollBy(0, 50);
      setTimeout(() => {
        if (hinting.current) {
          document.querySelector("#portfolio").scrollBy(0, -50);
        }
        setTimeout(() => {
          if (hinting.current) {
            document.querySelector("#portfolio").classList.add("snap-y");
            document.querySelector("#downArrow").classList.remove("absolute");
            document
              .querySelector("#downArrow")
              .classList.remove("bottom-[20vh]");
            hinting.current = false;
          }
        }, 400);
      }, 400);
    }
  }

  return (
    <div className="flex flex-col items-center pt-navbarHeight h-screen">
      <h1 className="mt-12 text-7xl ">I&apos;m Leifur Castle</h1>
      <p className="mt-6 text-lg w-[50vw] text-center text-grayText">
        I'm a <span className="text-white"> software developer</span> from
        General Assembly with expertise in
        <span className="text-white"> JavaScript</span> and{" "}
        <span className="text-white"> Python</span> and experience creating full
        stack applications with a focus on{" "}
        <span className="text-white"> NextJS</span> and
        <span className="text-white"> React</span>. I bring strong
        <span className="text-white"> problem-solving</span> skills, outstanding{" "}
        <span className="text-white"> results</span>, and a{" "}
        <span className="text-white"> passion</span> for learning to the table.
      </p>
      <hr className="w-[45vw] mt-6 mb-3 border-slate-500 opacity-25"></hr>
      <div className="flex gap-10 w-full">
        <div className="grow"></div>
        <div className="basis-[60px] flex">
          <div className="grow h-[60px]"></div>
          <a
            className="inline-block w-[40px] h-[40px] bg-contain bg-linkedInLogoWhite hover:bg-linkedInLogoBlue hover:w-[43px] hover:h-[43px] transition-{opacity}  duration-[250ms]"
            href="https://www.linkedin.com/in/leifurcastle/"
            target="_blank"
          ></a>
        </div>
        <div className="basis-[60px] flex">
          <a
            className="inline-block w-[37px] h-[37px] bg-contain bg-githubLogoWhite hover:bg-githubLogoBlue hover:w-[40px] hover:h-[40px] transition-{opacity}  duration-[250ms]"
            href="https://github.com/LeifCastle/"
            target="_blank"
          ></a>
        </div>
        <div className="grow"></div>
      </div>
      <div className="grow"></div>
      <div className="mb-[20vh] basis-[100px] flex flex-col items-center justify-end">
        <a
          id="downArrow"
          className="animate-pulse inline-block w-[75px] h-[75px] bg-contain bg-downArrowWhite hover:bg-downArrowGreen hover:w-[85px] hover:h-[85px] hover:cursor-pointer transition-{opacity}  duration-[250ms]"
          onClick={scrollToAbout}
          onMouseOver={scrollHint}
        ></a>
      </div>
    </div>
  );
}
