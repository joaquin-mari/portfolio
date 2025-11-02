import NumberSpan from "../utils/NumberSpan";
import CyanButton from "../utils/CyanButton";

export default function Header() {
  return (
    <header className="w-screen bg-yellow flex justify-between px-10 py-5 font-playfair sm:text-2xl lg:text-sm">
      <img src="/logo.png" alt="Icon Image" className="w-13 h-10" />
      <nav className="flex gap-5 items-center">
        <ol className="flex gap-5 ">
          <a href="#about" className="hover:text-cool-cyan cursor-pointer">
            <NumberSpan text="1" />
            About
          </a>
          <a href="#experience" className="hover:text-cool-cyan cursor-pointer">
            <NumberSpan text="2" />
            Experience
          </a>
          <a href="#work" className="hover:text-cool-cyan cursor-pointer">
            <NumberSpan text="3" />
            Work
          </a>
          <a href="#contact" className="hover:text-cool-cyan cursor-pointer">
            <NumberSpan text="4" />
            Contact
          </a>
        </ol>
        <a
          href="/Resume Joaquin Mari Marcos.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CyanButton text="Resume" />
        </a>
      </nav>
    </header>
  );
}
