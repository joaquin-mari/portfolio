import TechnologyTag from "./TechnologyTag";

interface Props {
  tags: string[];
  isReversed?: boolean;
}

export default function StackList({ tags, isReversed = false }: Props) {
  return (
    <>
      <ul
        className={`flex flex-wrap text-md gap-3 ${
          isReversed ? "justify-start" : "justify-end"
        }`}
      >
        {tags.map((tag, index) => (
          <TechnologyTag tag={tag} key={index} index={index} />
        ))}
      </ul>
    </>
  );
}
