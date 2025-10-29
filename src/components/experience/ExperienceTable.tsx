import type Item from "./ItemInterface";

interface Props {
  item: Item;
}

export default function ExperienceTable({ item }: Props) {
  return (
    <div className="px-10 max-w-2xl">
      <h3 className="font-bold text-3xl font-playfair">
        {item.title}{" "}
        <span className="text-cool-cyan font-inter">@{item.company}</span>
      </h3>
      <p className="text-md font-bold italic">{item.period}</p>
      <ul className="px-5 py-10 space-y-2">
        {item.details.map((line, index) => (
          <li key={index}>
            <div className="flex align-self">
              <img className="w-3 h-5 mx-2" src="/blue-arrow.png" alt="arrow" />
              <p className="text-xl">{line}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
