import StackItem from "../atoms/StackItem";

export default function StackList({ items }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 place-items-center">
      {items.map(({ title, icon }) => (
        <StackItem key={title} title={title} icon={icon} />
      ))}
    </ul>
  );
}
