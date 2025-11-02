interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return (
    <h2 className="font-semibold font-playfair lg:text-5xl sm:text-7xl whitespace-pre-line">
      {text}
    </h2>
  );
};

export default Title;
