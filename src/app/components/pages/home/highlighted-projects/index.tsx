import { Card } from "@/app/components/card";
import { Link } from "@/app/components/link";
import { Title } from "@/app/components/title";
import { HiArrowNarrowRight } from "react-icons/hi";

export function HighlightedProjects() {
  return (
    <section className="container py-16">
      <Title
        title="Projetos em destaques"
        desc="Aqui você verá os meus projetos em destaques, fique a vontade para explorar todos."
      />
      <Card
        img="/images/project.svg"
        title="Dogs"
        desc="Um site completo com o intuito de ser um blog para cachorros, utilizando React, React Router e API externas. Realizado no curso de React na origamid."
        techs={["React.js", "React Router", "Vite"]}
        more={true}
        date="11/12/2023"
      />
      <Card
        img="/images/project.svg"
        title="Dogs"
        desc="Um site completo com o intuito de ser um blog para cachorros, utilizando React, React Router e API externas. Realizado no curso de React na origamid."
        techs={["React.js", "React Router", "Vite"]}
        more={true}
        date="11/12/2023"
      />
      <Link href="/projects">
        Se interessou em algum? Ver todos
        <HiArrowNarrowRight />
      </Link>
    </section>
  );
}
