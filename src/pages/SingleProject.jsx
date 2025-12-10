import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../assets/icons/icons";

export default function SingleProject() {
  const { id } = useParams();
  const [singleProject, setSingleProject] = useState(null);

  useEffect(() => {
    const found = projects.find((p) => p.id === id);
    setSingleProject(found);
  }, [id]);

  const [current, setCurrent] = useState(0);

  // Auto-play
  useEffect(() => {
    if (!singleProject?.imgs) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % singleProject.imgs.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [singleProject]);

  if (!singleProject) return null;

  const { title, imgs, description, problem, solution, learnings } =
    singleProject;

  const goPrev = () =>
    setCurrent(current === 0 ? imgs.length - 1 : current - 1);

  const goNext = () => setCurrent((current + 1) % imgs.length);

  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        {/* Back */}
        <div>
          <Link to="/projects" className="return-btn block py-4">
            <FontAwesomeIcon icon={icons.return} /> Ritorna alla lista progetti
          </Link>
        </div>

        <h1 className="mt-8 mb-14">{title}</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* SLIDER */}
          <div className="lg:w-1/2 relative">
            <div className="overflow-hidden relative">
              {/* IMAGES */}
              <div
                className="flex transition-transform duration-700 max-h-[500px]"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {imgs.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-full shrink-0 object-contain"
                    alt={`Screenshot ${i + 1}`}
                  />
                ))}
              </div>

              {/* BUTTONS */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
                onClick={goPrev}
              >
                <FontAwesomeIcon icon={icons.chevronLeft} />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
                onClick={goNext}
              >
                <FontAwesomeIcon icon={icons.chevronRight} />
              </button>

              {/* DOTS */}
              <div className="absolute bottom-4 w-full flex justify-center gap-2">
                {imgs.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full transition ${
                      current === index
                        ? "bg-accent-primary scale-110"
                        : "bg-white/50"
                    }`}
                    onClick={() => setCurrent(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="lg:w-1/2 space-y-8 h-fit">
            <div>
              <h3 className="text-xl font-semibold mb-2">Descrizione</h3>
              <p className="text-white/80">{description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Obiettivo primario</h3>
              <p className="text-white/80">{problem}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Soluzione</h3>
              <p className="text-white/80">{solution}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Cosa ho imparato</h3>
              <p className="text-white/80">{learnings}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
