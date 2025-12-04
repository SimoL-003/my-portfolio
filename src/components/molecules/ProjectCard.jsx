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
      <div className="card bg-surface-secondary p-6 shadow-lg shadow-black/50">
        {/* Card image */}
        <div className="card__img">
          <img
            className="mx-auto h-48 object-cover"
            src={img}
            alt={`Anteprima progetto ${title}`}
          />
        </div>

        {/* Card text */}
        <div className="card__text pt-10">
          <h4>{title}</h4>
          <p className="py-4 text-sm leading-[150%]">{caption}</p>
          <div className="flex gap-3 flex-wrap">
            {tech.map((cur, index) => (
              <span key={index} className="label text-xs">
                {cur}
              </span>
            ))}
          </div>
          <div className="flex gap-8 pt-8">
            <a
              className="button button--primary px-3 py-2 md:px-4 md:py-3"
              href={linkDemo}
            >
              Link Demo
            </a>
            <a
              className="button button--secondary px-3 py-2 md:px-4 md:py-3"
              href={linkRepo}
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
