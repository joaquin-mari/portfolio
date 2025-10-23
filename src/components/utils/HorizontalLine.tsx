interface Props {
  width: string;
  color: string;
}

const HorizontalLine = ({ width, color = "bg-cool-cyan" }: Props) => {
  return <div className={`h-1 flex-1 h-px ${color} ${width}`}></div>;
};

export default HorizontalLine;
