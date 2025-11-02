import type Item from "./ItemInterface";

interface Props {
  item: Item;
}

export default function ExperienceTable({ item }: Props) {
  return (
    <div className="px-10 lg:max-w-2xl sm:max-w-5xl">
      <h3 className="font-bold lg:text-3xl sm:text-5xl font-playfair">
        {item.title}{" "}
        <span className="text-cool-cyan font-inter">@{item.company}</span>
      </h3>
      <p className="lg:text-md sm:text-2xl font-bold italic">{item.period}</p>
      <ul className="px-5 py-10 space-y-2 text-gray-border">
        {item.details.map((line, index) => (
          <li key={index}>
            <div className="flex align-self">
              <img
                className="lg:w-3 lg:h-5 sm:w-5 sm:h-7 mx-2"
                src="/blue-arrow.png"
                alt="arrow"
              />
              <p className="lg:text-xl sm:text-4xl">{line}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
