import { motion } from "motion/react";
import Hero from "../components/organisms/Hero";
import HomeAbout from "../components/organisms/HomeAbout";
import HomeProjects from "../components/organisms/HomeProjects";

export default function Home() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Hero />
      <HomeAbout />
      <HomeProjects />
    </motion.section>
  );
}
