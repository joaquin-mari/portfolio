import type Item from "./ItemInterface";

interface Props {
  items: Item[];
  selectedItem: Item;
  setItem: React.Dispatch<React.SetStateAction<Item>>;
}

export default function ItemsRow({ items, setItem, selectedItem }: Props) {
  return (
    <div className="w-full overflow-x-auto sm:block mt-30 mb-10 lg:hidden">
      <div className="flex flex-row min-w-min">
        {items.map((item, index) => {
          const isSelected = selectedItem === item;

          return (
            <div
              key={index}
              className={`
                group
                relative flex items-center justify-center
                min-w-[150px] px-11 py-5
                transition-colors duration-200
                cursor-pointer
                ${isSelected ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}
              `}
              onClick={() => setItem(item)}
            >
              <div
                className={`
                  absolute 
                  left-0 right-0 top-0
                  h-1 w-full
                  transition-colors duration-200
                  ${
                    isSelected
                      ? "bg-cool-cyan"
                      : "bg-cool-cyan-transparent group-hover:bg-cool-cyan"
                  }
                `}
              />
              <div className="font-playfair text-gray-border text-3xl text-center pt-2">
                {item.company}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
