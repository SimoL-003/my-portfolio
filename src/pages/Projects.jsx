import { Link, useNavigate } from "react-router-dom";
import ProjectCard from "../components/molecules/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section>
      {/* HEADING */}
      <hgroup className="pt-12 lg:pt-20">
        <div className="container">
          <h1>I miei progetti</h1>
          <h2 className="subtitle mt-4 text-base md:text-lg max-w-prose text-text-primary/70">
            Una raccolta dei progetti che ho sviluppato durante il mio percorso
            di formazione come Web Developer.
          </h2>
        </div>
      </hgroup>

      {/* PROJECT GRID */}
      <section className="projects-grid pb-12 lg:pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 py-6">
            {projects.map(
              ({ id, title, imgs, caption, repo, liveDemo, tech }) => (
                <div
                  onClick={() => navigate(`/projects/${id}`)}
                  key={id}
                  className="hover:scale-[102%] hover:cursor-pointer transition-all duration-300"
                >
                  <ProjectCard
                    title={title}
                    caption={caption}
                    linkDemo={liveDemo}
                    linkRepo={repo}
                    img={imgs[0]}
                    tech={tech}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </section>
  );
}
