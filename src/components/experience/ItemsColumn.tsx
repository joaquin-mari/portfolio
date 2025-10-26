import type Item from "./ItemInterface";

interface Props {
  items: Item[];
}

export default function ItemsColumn({ items }: Props) {
  return (
    <ul className="w-50">
      {items.map((item, index) => (
        <li
          key={index}
          className="
            group
            relative flex items-center h-30 px-5
            transition-colors duration-200
            hover:bg-[#F2F2F2]
            cursor-pointer
          "
        >
          <div
            className="
              absolute left-0 top-0 bottom-0
              w-1 bg-cool-cyan-transparent
              transition-colors duration-200
              group-hover:bg-cool-cyan
            "
          />
          <div className="font-playfair text-gray-border text-3xl pl-6">
            {item.company}
          </div>
        </li>
      ))}
    </ul>
  );
}
