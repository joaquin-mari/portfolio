import NumberSpan from "../utils/NumberSpan";
import CyanButton from "../utils/CyanButton";

export default function Header() {
  return (
    <header className="w-screen bg-yellow flex justify-between px-10 py-5 font-playfair">
      <img src="/logo.png" alt="Icon Image" className="w-13 h-10" />
      <div className="flex gap-5 items-center">
        <ol className="flex gap-5 ">
          <li className="hover:text-cool-cyan cursor-pointer">
            <NumberSpan text="1" />
            About
          </li>
          <li className="hover:text-cool-cyan cursor-pointer">
            <NumberSpan text="2" />
            Experience
          </li>
          <li className="hover:text-cool-cyan cursor-pointer">
            <NumberSpan text="3" />
            Work
          </li>
          <li className="hover:text-cool-cyan cursor-pointer">
            <NumberSpan text="4" />
            Contact
          </li>
        </ol>
        <CyanButton text="Resume" />
      </div>
    </header>
  );
}
