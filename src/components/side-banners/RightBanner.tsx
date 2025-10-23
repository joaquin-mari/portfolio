import VerticalLine from "./VerticalLine";
import VerticalText from "./VerticalText";
export default function RightBanner() {
  return (
    <div className="flex flex-col gap-3 fixed right-10 bottom-0 items-center">
      <VerticalText text="joaquin.mari.marcos@gmail.com" />
      <VerticalLine height="h-20" />
    </div>
  );
}
