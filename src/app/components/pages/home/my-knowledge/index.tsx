import { CardTechs } from "@/app/components/cardtechs";
import { Title } from "@/app/components/title";

export function MyKnowledge() {
  return (
    <section className="container py-16">
      <Title
        title="Meus Conhecimentos"
        desc="Fique a vontade para explorar todas as minhas competências e meus conhecimentos."
      />
      <div>
        <div className="mb-12">
          <h1 className="text-xl text-center lg:text-start font-bold my-4">
            Desenvolvimento Web
          </h1>
          <div className="flex items-center justify-center lg:justify-normal gap-4 flex-wrap">
            <CardTechs tech="HTML" img="/images/icons/html.svg" />
            <CardTechs tech="CSS" img="/images/icons/css.svg" />
            <CardTechs tech="JavaScript" img="/images/icons/javascript.svg" />
            <CardTechs tech="React" img="/images/icons/react.svg" />
            <CardTechs tech="TypeScript" img="/images/icons/typescript.svg" />
            <CardTechs tech="Tailwind CSS" img="/images/icons/tailwind.svg" />
            <CardTechs tech="Vite" img="/images/icons/vite.svg" />
            <CardTechs
              tech="React Router"
              img="/images/icons/reactrouter.svg"
            />
            <CardTechs
              tech="Framer Motion"
              img="/images/icons/framermotion.svg"
            />
          </div>
        </div>
        <div className="mb-12">
          <h1 className="text-xl text-center lg:text-start font-bold my-4">
            Design
          </h1>
          <div className="flex items-center justify-center lg:justify-normal gap-4 flex-wrap">
            <CardTechs tech="Adobe Photoshop" img="/images/icons/ps.svg" />
            <CardTechs tech="Adobe Illustrator" img="/images/icons/illus.svg" />
            <CardTechs tech="Figma" img="/images/icons/figma.svg" />
          </div>
        </div>
        <div>
          <h1 className="text-xl text-center lg:text-start font-bold my-4">
            Controle de Versão
          </h1>
          <div className="flex items-center justify-center lg:justify-normal gap-4 flex-wrap">
            <CardTechs tech="Git" img="/images/icons/git.svg" />
            <CardTechs tech="Github" img="/images/icons/github.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
