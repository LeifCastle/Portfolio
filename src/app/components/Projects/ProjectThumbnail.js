export default function ProjectThumbnail({ title, thumbnail }) {
  return (
    <div className="flex flex-col space-between bg-aboutBg w-calc(15vw*2.0661)] h-calc(15vw+50px) rounded-md overflow-y-hidden">
      <p className="text-3xl w-full font-heading text-center pt-3">{title}</p>
      <hr className="w-full border-slate-500 opacity-25"></hr>
      <div
        id="thumbnail"
        className={`inline-block w-[calc(15vw*2.0661)] h-[15vw] bg-contain ${thumbnail} rounded-md hover:w-[calc(15.5vw*2.0661)] hover:h-[15.5vw] transition-{opacity} duration-[250ms]`}
      ></div>
    </div>
  );
}
