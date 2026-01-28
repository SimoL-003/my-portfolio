import { useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/molecules/ProjectCard";

export default function ProjectGrid() {
  const navigate = useNavigate();

  return (
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
            ),
          )}
        </div>
      </div>
    </section>
  );
}
