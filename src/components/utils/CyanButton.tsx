interface Props {
  text: string;
  size?: "sm" | "md" | "lg";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CyanButton({ text, size = "md", onClick }: Props) {
  const sizeClasses = {
    sm: "lg:px-3 sm:px-5 py-1 lg:text-sm sm:text-xl",
    md: "lg:px-5 sm:px-8 py-2 lg:text-sm sm:text-2xl",
    lg: "lg:px-8 sm:px-11 py-3 lg:text-lg sm:text-3xl",
  };

  return (
    <button
      className={`
  border-2 border-cool-cyan rounded text-cool-cyan cursor-pointer 
  transition-all duration-300 ease-in-out 
  hover:bg-cool-cyan hover:text-white 
  active:scale-95 
  ${sizeClasses[size]}
  sm:hover:bg-cool-cyan sm:hover:text-white 
  active:bg-cool-cyan active:text-white
`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
