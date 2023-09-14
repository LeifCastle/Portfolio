import Skill from "../Skill";

export default function ProjectDescription({ project }) {
  let details = project.details.map((detail) => {
    return <li>{detail}</li>;
  });

  let skills = project.techStack.map((skill) => {
    return <Skill skill={skill} key={skill} />;
  });

  return (
    <div className="flex flex-col bg-button1 rounded-md w-[60vw] h-[70vh] overflow-y-scroll no-scrollbar">
      <div className="flex flex-col items-center">
        <p className="text-3xl w-full  font-heading text-center pt-[10px]">
          {project.title}
        </p>
        <hr className="w-[20vw] mt-1 mb-4 border-[3px] border-slate-200 rounded-full opacity-25"></hr>
      </div>
      <div className="mx-4">
        <p className="text-grayText">{project.overview}</p>
        <div className="flex m-4">
          <ul className="list-disc text-grayText">{details}</ul>
        </div>
        <div className="flex flex-wrap">{skills}</div>
      </div>
    </div>
  );
}
