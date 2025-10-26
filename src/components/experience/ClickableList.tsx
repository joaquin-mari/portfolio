import ItemsColumn from "./ItemsColumn";
import ExperienceTable from "./ExperienceTable";
import type Item from "./ItemInterface";

interface Props {
  items: Item[];
}

export default function ClickableList({ items }: Props) {
  const item = items[0];
  return (
    <div className="flex pt-10">
      <ItemsColumn items={items} />
      <ExperienceTable item={item} />
    </div>
  );
}
