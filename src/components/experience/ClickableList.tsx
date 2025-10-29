import ItemsColumn from "./ItemsColumn";
import ExperienceTable from "./ExperienceTable";
import type Item from "./ItemInterface";
import { useState } from "react";

interface Props {
  items: Item[];
}

export default function ClickableList({ items }: Props) {
  const [item, setItem] = useState(items[0]);
  return (
    <div className="flex pt-10">
      <ItemsColumn items={items} setItem={setItem} selectedItem={item} />
      <ExperienceTable item={item} />
    </div>
  );
}
