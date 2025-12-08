import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StackItem({ title, icon }) {
  return (
    <li className="flex flex-col items-center transition-all hover:scale-105">
      <FontAwesomeIcon icon={icon} className="text-4xl mb-3" />
      <span className="tracking-wider font-semibold text-sm">{title}</span>
    </li>
  );
}
