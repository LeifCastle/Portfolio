export default function ProjectDescription({ project }) {
  return (
    <div className="flex flex-col bg-button1 rounded-md w-[60vw] h-[70vh] overflow-y-scroll no-scrollbar">
      <div className="flex flex-col items-center">
        <p className="text-3xl w-full  font-heading text-center pt-[10px]">
          {project.title}
        </p>
        <hr className="w-[20vw] mt-1 mb-4 border-[3px] border-slate-200 rounded-full opacity-25"></hr>
      </div>
      <div className="mx-4">
        <p className="">{project.overview}</p>
        <p className="">{project.techStack}</p>
      </div>
    </div>
  );
}
