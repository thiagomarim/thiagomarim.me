import { Link } from "@/app/components/link";
import { Title } from "@/app/components/Title";
import { HiArrowNarrowLeft } from "react-icons/hi";

export function PageIntroduction() {
  return (
    <section className="container py-16">
      <div className="flex flex-col items-center justify-center ">
        <Title
          title="Meus Projetos"
          desc="Aqui você vera todos os meus projetos que eu desenvolvi e as tecnologias utilizadas. Fique a vontade para navegar e explorar!"
        />
        <Link href="/" className="mt-[-20px] ">
          <HiArrowNarrowLeft />
          Voltar para Home
        </Link>
      </div>
    </section>
  );
}
