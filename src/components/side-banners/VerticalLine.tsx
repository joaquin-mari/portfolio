interface Props {
  height: string;
  color?: string;
  width?: string;
}

export default function VerticalLine({
  height,
  color = "bg-gray-border",
  width = "w-1",
}: Props) {
  return <div className={`${height} ${width} ${color}`}></div>;
}
