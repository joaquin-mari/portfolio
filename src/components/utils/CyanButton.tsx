interface Props {
  text: string;
  size?: "sm" | "md" | "lg";
}

export default function CyanButton({ text, size = "md" }: Props) {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-md",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={`border-2 border-cool-cyan rounded text-cool-cyan cursor-pointer transition-all duration-300 ease-in-out hover:bg-cool-cyan hover:text-white active:scale-95 ${sizeClasses[size]}`}
    >
      {text}
    </button>
  );
}
