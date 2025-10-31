import VerticalLine from "./VerticalLine";

export default function LeftBanner() {
  return (
    <div className="fixed flex flex-col absolute left-10 bottom-0 items-center gap-3">
      <a
        href="https://github.com/joaquin-mari"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="cursor-pointer" src="/GitHub.png" alt="github link" />
      </a>
      <a
        href="https://www.linkedin.com/in/joaquin-mari-marcos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="cursor-pointer"
          src="/LinkedIn.png"
          alt="linkedin link"
        />
      </a>
      <VerticalLine height={"h-65"} />
    </div>
  );
}
