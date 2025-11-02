import type Item from "./ItemInterface";

interface Props {
  items: Item[];
  selectedItem: Item;
  setItem: React.Dispatch<React.SetStateAction<Item>>;
}
export default function ItemsColumn({ items, setItem, selectedItem }: Props) {
  return (
    <ul className="w-45 sm:hidden lg:block">
      {items.map((item, index) => {
        const isSelected = selectedItem === item;

        return (
          <li
            key={index}
            className={`
              group
              relative flex items-center h-20 px-1
              transition-colors duration-200
              cursor-pointer
              ${isSelected ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}
            `}
            onClick={() => setItem(item)}
          >
            <div
              className={`
                absolute left-0 top-0 bottom-0
                w-1
                transition-colors duration-200
                ${
                  isSelected
                    ? "bg-cool-cyan"
                    : "bg-cool-cyan-transparent group-hover:bg-cool-cyan"
                }
              `}
            />
            <div className="font-playfair text-gray-border text-3xl pl-6">
              {item.company}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
