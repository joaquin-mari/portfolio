interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return (
    <h2 className="font-semibold font-playfair text-5xl whitespace-pre-line">
      {text}
    </h2>
  );
};

export default Title;
