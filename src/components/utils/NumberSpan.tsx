interface Props {
  text: string;
  size?: string;
}

export default function NumberSpan({ text, size }: Props) {
  return <span className={`text-cool-cyan text-${size}`}>{text}. </span>;
}
