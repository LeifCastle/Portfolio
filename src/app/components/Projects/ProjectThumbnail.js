export default function ProjectThumbnail({ title, thumbnail, link }) {
  return (
    <div className="flex flex-col items-center justify-center bg-button1 rounded-md overflow-y-hidden text-white">
      <p className="text-3xl w-full rounded-tr-md rounded-tl-md h-[50px] bg-navbarBg font-heading text-center pt-[10px]">
        {title}
      </p>
      <hr className="w-full border-slate-500 opacity-25"></hr>
      <div
        id="thumbnail"
        className={`flex items-center justify-center w-[calc(12vw*2.0661)] h-[12vw] bg-contain ${thumbnail} rounded-md transition-all duration-[400ms]`}
      ></div>
    </div>
  );
}
