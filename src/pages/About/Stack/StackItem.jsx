export default function StackItem({ title, icon }) {
  return (
    <li className="flex flex-col items-center transition-all">
      <img src={icon} alt={title} className="w-10 max-h-10 mb-3" />
      <span className="tracking-wider font-semibold text-sm">{title}</span>
    </li>
  );
}
