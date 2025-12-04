import { Link } from "react-router-dom";
import StarField from "../molecules/StarField";

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

          {/* Button gropu */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10 w-fit mx-auto">
            <Link
              to={"/contacts"}
              className="button button--primary max-md:w-full"
            >
              Entriamo in contatto
            </Link>
            <a href="#projects-preview" className="button button--secondary">
              Dai un'occhiata ai miei lavori
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
