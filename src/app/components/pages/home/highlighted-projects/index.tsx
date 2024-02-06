import { Card } from "@/app/components/card";
import { Link } from "@/app/components/link";
import { Title } from "@/app/components/title";
import { Project } from "@/app/types/project";
import { HiArrowNarrowRight } from "react-icons/hi";

interface HighlightedProjectsProps {
  projects: Project[];
}

export function HighlightedProjects({ projects }: HighlightedProjectsProps) {
  return (
    <section className="container py-16">
      <Title
        title="Projetos em destaques"
        desc="Aqui você verá os meus projetos em destaques, fique a vontade para explorar todos."
      />
      <div className="odd:bg-red-500">
        {projects?.map((project) => (
          <div key={project.title}>
            <Card project={project} />
          </div>
        ))}
      </div>

      <Link href="/projects">
        Se interessou em algum? Ver todos
        <HiArrowNarrowRight />
      </Link>
    </section>
  );
}
