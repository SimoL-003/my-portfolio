import { motion } from "motion/react";
import Hero from "./Hero/Hero";
import AboutSection from "./About/About";
import ProjectsSection from "./Projects";

export default function Home() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Hero />
      <AboutSection />
      <ProjectsSection />
    </motion.section>
  );
}
