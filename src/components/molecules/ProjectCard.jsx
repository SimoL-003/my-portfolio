import Button from "../atoms/Button";

export default function ProjectCard({
  title,
  caption,
  tech,
  linkDemo,
  linkRepo,
  img,
}) {
  return (
    <>
      {/* CARD */}
      <div className="card bg-surface-secondary border border-white/10 p-6 md:p-8 lg:p-10 2xl:p-8 shadow-lg shadow-black/50 h-full">
        {/* Card image */}
        <div>
          <img
            className="mx-auto h-48 object-cover object-top w-full shadow-2xl"
            src={img}
            alt={`Anteprima progetto ${title}`}
          />
        </div>

        {/* Card text */}
        <div className="card__text pt-10">
          <h4>{title}</h4>
          <p className="py-4 text-sm leading-[150%]">{caption}</p>

          {/* Tech */}
          <div className="flex gap-3 flex-wrap">
            {tech.map((cur, index) => (
              <span key={index} className="label text-xs">
                {cur}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-8">
            <Button
              href={linkDemo}
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-2 md:px-4 md:py-3"
              target="_blank"
            >
              Live Demo
            </Button>
            <Button
              href={linkRepo}
              onClick={(e) => e.stopPropagation()}
              variant="secondary"
              className="px-3 py-2 md:px-4 md:py-3"
              target="_blank"
            >
              Github Repo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
