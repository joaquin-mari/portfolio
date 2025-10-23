interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return <h2 className="text-3xl md:text-5xl  break-words">{text}</h2>;
};

export default Title;
