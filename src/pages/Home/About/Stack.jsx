import { stack } from "../../../data/stack";

export default function StackSection() {
  return (
    <section>
      {" "}
      <h3 className="mt-10 mb-4"> Il mio stack </h3>
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        {stack.map(({ icon, title }) => (
          <div
            key={title}
            className="label flex items-center gap-2 h-8.5 lg:h-9.25"
          >
            <img src={icon} alt={title} className="w-5" />
            <span>{title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
