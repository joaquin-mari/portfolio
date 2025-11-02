interface Props {
  text: string;
}

const Paragraph = ({ text }: Props) => {
  return (
    <div className="mt-10 font-inter whitespace-pre-line text-gray-border lg:text-base sm:text-3xl">
      {text}
    </div>
  );
};

export default Paragraph;
