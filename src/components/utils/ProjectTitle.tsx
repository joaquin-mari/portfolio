interface Props {
  title: string;
}

export default function ProjectTitle({ title }: Props) {
  return (
    <>
      <h3 className="font-playfair text-5xl font-bold">{title}</h3>;
    </>
  );
}
