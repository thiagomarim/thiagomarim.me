import { About } from "./components/pages/home/about";
import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { MyKnowledge } from "./components/pages/home/my-knowledge";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <MyKnowledge />
      <HighlightedProjects />
    </>
  );
}
