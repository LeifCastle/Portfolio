import Skill from "../Skill";

export default function ProjectDescription({ project, changeProject }) {
  let details = project.details.map((detail) => {
    return <li key={detail}>{detail}</li>;
  });

  let skills = project.techStack.map((skill) => {
    return <Skill skill={skill} key={skill} />;
  });

  return (
    <div className="flex flex-col bg-button1 rounded-md w-[90vw] h-[90vh] md:w-[60vw] md:h-[70vh]">
      <div className="flex flex-col md:flex-row items-center justify-center sticky top-0 rounded-tr-md rounded-tl-md bg-navbarBg">
        <div className="basis-1/3 flex items-center">
          <a
            href={project.link}
            target="_blank"
            className="md:ml-4 text-blue-400 hover:text-lg transition-text duration-[300ms]"
          >
            Visit Website
          </a>
        </div>
        <div className="basis-1/3 flex items-center flex-col">
          <div className="flex md:items-end">
            <div className="md:hidden h-[60px] flex md:items-end">
              <div
                id="downArrow"
                className="md:hidden w-[60px] h-[60px] bg-contain bg-downArrowWhite hover:cursor-pointer origin-center rotate-90"
                onClick={(e) => changeProject("prev", e)}
              ></div>
            </div>
            <p className="md:mt-2 text-3xl w-full font-heading text-center text-white pt-[10px]">
              {project.title}
            </p>
            <div className=" h-[60px]">
              <div
                id="downArrow"
                className="md:hidden w-[60px] h-[60px] bg-contain bg-downArrowWhite hover:cursor-pointer origin-center rotate-[270deg]"
                onClick={(e) => changeProject("next", e)}
              ></div>
            </div>
          </div>
          <hr className="w-[20vw] mt-1 mb-4 border-[3px] border-slate-200 rounded-full opacity-25"></hr>
        </div>
        <div className="basis-1/3"></div>
      </div>
      <div className="px-4 pt-4 h-full overflow-y-auto">
        <p className="text-grayText">{project.overview}</p>
        <div className="flex m-4">
          <ul className="list-disc text-grayText">{details}</ul>
        </div>
        <div className="flex flex-wrap mb-4">{skills}</div>
      </div>
    </div>
  );
}
