import { motion } from "motion/react";
import ProjectGrid from "../components/organisms/ProjectsGrid";

export default function Projects() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
      <ProjectGrid />
    </motion.section>
  );
}
