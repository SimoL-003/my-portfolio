export default function StackItem({ title, icon }) {
  return (
    <li className="flex flex-col items-center transition-all hover:scale-105">
      <img
        src={icon}
        alt={title}
        className="w-10 max-h-10 mb-3 drop-shadow-white/20 drop-shadow-2xl"
      />
      <span className="tracking-wider font-semibold text-sm">{title}</span>
    </li>
  );
}
