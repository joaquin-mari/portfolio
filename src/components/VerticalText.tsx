interface Props {
  text: string;
}

const VerticalText = ({ text }: Props) => {
  return (
    <img
      className="cursor-pointer pb-7"
      src="/email-vertical.png"
      alt="joaquin.mari.marcos@gmail.com"
    />
  );
};

export default VerticalText;
