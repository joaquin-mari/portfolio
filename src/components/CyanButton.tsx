interface Props {
  text: string;
}
export default function CyanButton({ text }: Props) {
  return (
    <button className="px-5 py-2 border border-cool-cyan rounded border-2 text-cool-cyan cursor-pointer transition-all duration-300 ease-in-out hover:bg-cool-cyan hover:text-white active:scale-95q">
      {text}
    </button>
  );
}
