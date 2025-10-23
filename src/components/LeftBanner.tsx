import VerticalLine from "./VerticalLine";

export default function LeftBanner() {
  return (
    <div className="absolute flex flex-col absolute left-10 bottom-0 items-center gap-3">
      <img className="cursor-pointer" src="/GitHub.png" alt="github link" />
      <img className="cursor-pointer" src="/LinkedIn.png" alt="linkedin link" />
      <VerticalLine height={"h-52"} />
    </div>
  );
}
