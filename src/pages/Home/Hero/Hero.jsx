import { Link } from "react-router-dom";
import StarField from "./StarField";
import Button from "../../../components/atoms/Button";

export default function Hero() {
  return (
    <section className="relative">
      <div>
        <StarField />
      </div>

      <div className="container absolute inset-0 flex items-center justify-center text-white text-center">
        <div>
          <h1>
            Ciao, sono <span className="text-accent-primary">Simone</span>.
            <span className="block mt-4">Sono uno sviluppatore web.</span>
          </h1>

          {/* Button group */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10 w-fit mx-auto">
            <Button to="/contacts" className="max-md:w-full">
              Entriamo in contatto
            </Button>
            <Button href="#projects-preview" variant="secondary">
              Dai un'occhiata ai miei lavori
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
