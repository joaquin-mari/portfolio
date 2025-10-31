import NumberSpan from "./NumberSpan";
import HorizontalLine from "./HorizontalLine";
import Title from "./Title";

interface Props {
  number?: string;
  title: string;
}
export default function Heading({ number, title }: Props) {
  return (
    <div className="flex items-center gap-15 text-left">
      <div className="flex gap-5 items-baseline">
        {number && <NumberSpan text={number} size="text-4xl" />}
        <Title text={title} />
      </div>
      <HorizontalLine width="w-full" />
    </div>
  );
}
