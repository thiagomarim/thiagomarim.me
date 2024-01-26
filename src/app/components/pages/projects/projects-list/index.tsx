import { Project } from "@/app/types/project";
import { ProjectCard } from "./project-card";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="container py-32 grid gap-6 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </section>
  );
}
