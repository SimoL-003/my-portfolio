import { Link } from "react-router-dom";
import StackSection from "./Stack";
import BioSection from "./Bio";
import simo from "../../../assets/images/me/img-me.jpg";

export default function AboutSection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <h2 className="text-center my-6 lg:mt-8 lg:mb-12">Chi sono</h2>

        <div className="flex items-center justify-center">
          {/* Image container */}
          <div className="hidden lg:block lg:w-1/3 lg:p-4">
            <img src={simo} alt="Simone Leuzzi" />
          </div>

          {/* Text container */}
          <div className="text-center lg:text-left lg:w-2/3 lg:p-6 lg:pl-8 max-w-prose">
            <BioSection />

            <StackSection />

            <Link className="button button--primary mt-8" to={"/about-me"}>
              Scopri di più
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
