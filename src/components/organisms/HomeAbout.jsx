import { Link } from "react-router-dom";

export default function HomeAbout() {
  return (
    <section>
      <div className="container">
        <h2 className="text-center mt-8 mb-12">Chi sono</h2>
        <div className="flex">
          {/* Image container */}
          <div className="w-1/3 p-4">
            <img src="https://placehold.co/300x400" alt="" />
          </div>

          {/* Text container */}
          <div className="w-2/3 p-4 pl-8">
            <p>
              Sono Simone Leuzzi, un aspirante Front-End Developer con una forte
              passione per la UI, il design e il web moderno. Sto studiando e
              costruendo progetti con React per crescere come sviluppatore e
              migliorare ogni giorno.
            </p>

            <h3> Il mio stack </h3>
            {/* card con i linguaggi che conosco */}
          </div>

          <Link className="button button--primary" to={"/about-me"}>
            Scopri di più
          </Link>
        </div>
      </div>
    </section>
  );
}
