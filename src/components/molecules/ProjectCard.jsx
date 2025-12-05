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
      <div className="card bg-surface-secondary  p-6 md:p-8 lg:p-10 2xl:p-8 shadow-lg shadow-black/50">
        {/* Card image */}
        <div>
          <img
            className="mx-auto h-48 object-cover"
            src="https://placehold.co/700x400"
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
            <a
              className="button button--primary px-3 py-2 md:px-4 md:py-3"
              href={linkDemo}
              target="_blank"
            >
              Link Demo
            </a>
            <a
              className="button button--secondary px-3 py-2 md:px-4 md:py-3"
              href={linkRepo}
              target="_blank"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
