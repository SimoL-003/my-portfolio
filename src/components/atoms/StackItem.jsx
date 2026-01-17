import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StackItem({ title, icon }) {
  return (
    <li className="flex flex-col items-center transition-all">
      <img src={icon} alt={title} className="min-w-10 h-10 mb-3" />
      <span className="tracking-wider font-semibold text-sm">{title}</span>
    </li>
  );
}
