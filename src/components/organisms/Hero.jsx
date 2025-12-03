import { Link } from "react-router-dom";
import StarField from "../molecules/StarField";

export default function Hero() {
  return (
    <section className="relative">
      <StarField />

      <div className="container absolute inset-0 flex items-center justify-center text-white text-center">
        <div>
          <h1>
            Ciao, sono <span className="text-accent-primary">Simone</span>.
            <span className=" inline-block mt-4">
              Sono uno sviluppatore web.
            </span>
          </h1>

          {/* Button gropu */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10 w-fit mx-auto">
            <a href="#projects-preview" className="button button--primary">
              Dai un'occhiata ai miei lavori
            </a>
            <a
              href="#about-me"
              className="button button--secondary max-md:w-full"
            >
              Scopri qualcosa su di me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
