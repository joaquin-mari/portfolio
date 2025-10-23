interface Props {
  text: string;
}

const Paragraph = ({ text }: Props) => {
  return <div className="mt-10 font-inter whitespace-pre-line">{text}</div>;
};

export default Paragraph;
