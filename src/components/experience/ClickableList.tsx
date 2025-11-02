import ItemsColumn from "./ItemsColumn";
import ItemsRow from "./ItemsRow";
import ExperienceTable from "./ExperienceTable";
import type Item from "./ItemInterface";
import { useState, type SetStateAction } from "react";

interface Props {
  items: Item[];
}

export default function ClickableList({ items }: Props) {
  const [item, setItem] = useState(items[0]);
  return (
    <div className="flex pt-10 lg:flex-row sm:flex-col">
      <ItemsColumn items={items} setItem={setItem} selectedItem={item} />
      <ItemsRow items={items} setItem={setItem} selectedItem={item} />
      <ExperienceTable item={item} />
    </div>
  );
}
