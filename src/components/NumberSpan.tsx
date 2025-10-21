interface Props {
  text: string;
}

export default function NumberSpan({ text }: Props) {
  return <span className="text-cool-cyan">{text}. </span>;
}
