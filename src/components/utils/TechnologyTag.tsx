interface Props {
  tag: string;
  index: number;
}

export default function TechnologyStack({ tag, index }: Props) {
  return (
    <li key={index} className="px-3 py-1 text-sm font-medium font-recursive">
      {tag}
    </li>
  );
}
