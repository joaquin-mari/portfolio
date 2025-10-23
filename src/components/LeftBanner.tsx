import VerticalLine from "./VerticalLine";

export default function LeftBanner() {
  return (
    <div className="flex flex-col absolute left-10 bottom-0">
      <VerticalLine height={"h-52"} />
    </div>
  );
}
