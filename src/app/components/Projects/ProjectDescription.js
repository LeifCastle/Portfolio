import Skill from "../Skill";

export default function ProjectDescription({ project }) {
  let details = project.details.map((detail) => {
    return <li key={detail}>{detail}</li>;
  });

  let skills = project.techStack.map((skill) => {
    return <Skill skill={skill} key={skill} />;
  });

  return (
    <div className="flex flex-col bg-button1 rounded-md w-[60vw] h-[70vh]">
      <div className="flex flex-col md:flex-row items-center justify-center sticky top-0 bg-navbarBg">
        <div className="basis-1/3 flex items-center">
          <a
            href={project.link}
            target="_blank"
            className="ml-4 text-blue-400 hover:text-lg transition-text duration-[300ms]"
          >
            Visit Website
          </a>
        </div>
        <div className="basis-1/3 flex items-center flex-col">
          <p className="md:mt-2 text-3xl w-full font-heading text-center text-white pt-[10px]">
            {project.title}
          </p>
          <hr className="w-[20vw] mt-1 mb-4 border-[3px] border-slate-200 rounded-full opacity-25"></hr>
        </div>
        <div className="basis-1/3"></div>
      </div>
      <div className="ml-4 pr-4 pt-4 overflow-y-scroll">
        <p className="text-grayText">{project.overview}</p>
        <div className="flex m-4">
          <ul className="list-disc text-grayText">{details}</ul>
        </div>
        <div className="flex flex-wrap mb-4">{skills}</div>
      </div>
    </div>
  );
}
