import { CardTechs } from "@/app/components/cardtechs";
import { Title } from "@/app/components/title";
import { KnownTech } from "@/app/types/project";

interface MyKnowledgeProps {
  techs: KnownTech[];
}

export function MyKnowledge({ techs }: MyKnowledgeProps) {
  return (
    <section className="container py-16">
      <Title
        title="Meus Conhecimentos"
        desc="Fique a vontade para explorar todas as minhas competências e meus conhecimentos."
      />
      <div>
        <div className="mb-12">
          <div className="flex items-center justify-center lg:justify-normal gap-4 flex-wrap">
            {techs.map((tech) => (
              <CardTechs key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
