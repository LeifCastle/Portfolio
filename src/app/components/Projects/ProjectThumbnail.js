export default function ProjectThumbnail({ title, thumbnail }) {
  return (
    <div className="flex flex-col items-center justify-center bg-button1 rounded-md overflow-y-hidden">
      <p className="text-3xl w-full rounded-tr-md rounded-tl-md h-[50px] bg-navbarBg font-heading text-center pt-[10px]">
        {title}
      </p>
      <hr className="w-full border-slate-500 opacity-25"></hr>
      <div
        id="thumbnail"
        className={`w-[calc(12vw*2.0661)] h-[12vw] bg-contain ${thumbnail} rounded-md hover:w-[calc(12.5vw*2.0661)] hover:h-[12.5vw] hover:opacity-40 transition-{opacity} duration-[250ms]`}
      ></div>
    </div>
  );
}
