import { Link } from "react-router-dom";
import { homeProjects } from "../../data/projects";
import ProjectCard from "../../components/molecules/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects-preview" className="py-12 lg:py-20">
      <div className="container">
        <h2 className="text-center my-6 lg:mt-8 lg:mb-12">
          Alcuni dei miei progetti
        </h2>

        {/* PROJECTS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 py-6">
          {homeProjects.map(
            ({ id, title, imgs, caption, repo, liveDemo, tech }) => (
              <ProjectCard
                key={id}
                title={title}
                caption={caption}
                linkDemo={liveDemo}
                linkRepo={repo}
                img={imgs[0]}
                tech={tech}
              />
            )
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10 w-fit mx-auto">
          <Link
            to={"/contacts"}
            className="button button--primary max-md:w-full text-center"
          >
            Contattami
          </Link>
          <Link to={"/projects"} className="button button--secondary">
            Guarda tutti i progetti
          </Link>
        </div>
      </div>
    </section>
  );
}
