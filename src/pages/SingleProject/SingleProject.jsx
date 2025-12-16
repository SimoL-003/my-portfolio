import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons/icons";
import { motion } from "motion/react";
import SliderSection from "./Slider";
import DetailsSection from "./Details";

export default function SingleProjectPage() {
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
    }, 5000);

    return () => clearInterval(timer);
  }, [singleProject]);

  if (!singleProject) return null;

  const { title, imgs, liveDemo, repo } = singleProject;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-14 pt-2 lg:pb-20 lg:t-14"
    >
      <div className="container">
        {/* Back to page */}
        <div>
          <Link to="/projects" className="return-btn block py-4 pr-4 w-fit">
            <FontAwesomeIcon icon={icons.return} /> Ritorna alla lista progetti
          </Link>
        </div>

        {/* PROJECT */}
        <section>
          <h1 className="mt-8 mb-14">{title}</h1>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* SLIDER */}
            <SliderSection
              imgs={imgs}
              current={current}
              setCurrent={setCurrent}
            />

            {/* DETAILS */}
            <DetailsSection project={singleProject} />
          </div>

          {/* BUTTONS */}
          <div className="flex sm:flex-row items-center justify-center gap-4 mt-10 w-fit mx-auto">
            <a
              className="button button--secondary px-3 py-2 sm:px-4 sm:py-3"
              href={repo}
              target="_blank"
            >
              Github Repo
            </a>
            <a
              className="button button--primary px-3 py-2 sm:px-4 sm:py-3"
              href={liveDemo}
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </section>
      </div>
    </motion.section>
  );
}
