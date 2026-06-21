interface Props {
  tag: string;
}

export default function BlueTag({ tag }: Props) {
  return (
    <>
      <span className="text-cool-cyan font-recursive text-xl">{tag}</span>;
    </>
  );
}
