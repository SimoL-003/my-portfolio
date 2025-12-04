import Hero from "../components/organisms/Hero";
import HomeAbout from "../components/organisms/HomeAbout";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <section id="projects-preview" className="h-[100px]"></section>
    </>
  );
}
