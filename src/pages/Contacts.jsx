import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../assets/icons/icons";

export default function Contacts() {
  return (
    <section className="min-h-[calc(100vh-310.5px)] flex">
      <div className="container flex">
        <div className="w-1/2">
          <FontAwesomeIcon icon={icons.handsShaking} />
          <h1>Entriamo in contatto</h1>
        </div>
        <div className="w-1/2">form</div>
      </div>
    </section>
  );
}
