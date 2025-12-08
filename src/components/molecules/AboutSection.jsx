import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutSection({ icon, heading, children }) {
  return (
    <section className="about-section py-12 lg:py-20">
      <div className="container flex flex-col md:flex-row">
        {/* Icon */}
        <div className="about-section__icon md:w-1/2 flex items-center justify-center">
          <FontAwesomeIcon icon={icon} className="text-4xl md:text-6xl" />
        </div>

        {/* Text */}
        <div className="about-section__text md:w-1/2">
          <h2 className="max-md:text-center">{heading}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}
