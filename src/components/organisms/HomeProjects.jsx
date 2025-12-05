import { homeProjects } from "../../data/projects";
import ProjectCard from "../molecules/ProjectCard";

export default function HomeProjects() {
  return (
    <section id="projects-preview" className="py-12 lg:py-20">
      <div className="container">
        <h2 className="text-center my-6 lg:mt-8 lg:mb-12">
          Alcuni dei miei progetti
        </h2>
        {/* {homeProjects.map(({ title, id }) => (
          <div>card</div>
        ))} */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {homeProjects.map(
            ({ id, title, img, caption, repo, liveDemo, tech }) => (
              <ProjectCard
                key={id}
                title={title}
                caption={caption}
                linkDemo={liveDemo}
                linkRepo={repo}
                // img={img}
                tech={tech}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
