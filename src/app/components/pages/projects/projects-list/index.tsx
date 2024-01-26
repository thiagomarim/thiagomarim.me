import { ProjectCard } from "./project-card";

export function ProjectList() {
  return (
    <section className="container py-32 grid gap-6 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
}
