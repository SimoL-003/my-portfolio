import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { stack } from "../../data/stack";

export default function HomeAbout() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <h2 className="text-center my-6 lg:mt-8 lg:mb-12">Chi sono</h2>
        <div className="flex items-center justify-center">
          {/* Image container */}
          <div className="hidden lg:block lg:w-1/3 lg:p-4">
            <img src="https://placehold.co/300x400" alt="Simone Leuzzi" />
          </div>

          {/* Text container */}
          <div className="text-center lg:text-left lg:w-2/3 lg:p-6 lg:pl-8 max-w-prose">
            <p className="mb-4">
              Sono <span className="text-accent-primary">Simone Leuzzi</span> ,
              un aspirante{" "}
              <span className="text-accent-primary">Front-End Developer</span>{" "}
              con una forte passione per la UI, il design e il web moderno.
            </p>
            <p>
              Sto studiando e costruendo progetti con{" "}
              <span className="text-accent-primary">React</span> per crescere
              come sviluppatore e migliorare ogni giorno.
            </p>

            <h3 className="mt-10 mb-4"> Il mio stack </h3>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {stack.map(({ icon, title, color }, index) => (
                <div key={index} className="label flex items-center gap-2">
                  {icon && <FontAwesomeIcon icon={icon} size="xl" />}
                  <span>{title}</span>
                </div>
              ))}
            </div>

            <Link className="button button--primary mt-8" to={"/about-me"}>
              Scopri di più
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
