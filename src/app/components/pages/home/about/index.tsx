import { Card } from "@/app/components/card";
import { Title } from "@/app/components/title";

export function About() {
  return (
    <section className="container py-16">
      <Title
        title="Sobre mim"
        desc="Aqui você irá saber um pouco mais sobre mim."
      />
      <Card
        img="/images/about-img.svg"
        desc="Eu me chamo Thiago Soares Marim, possuo 18 anos, sou totalmente
          apaixonado pelo Front-end. Quando tive o meu primeiro contato com a
          programação me apaixonei de cara, a partir desse dia venho me
          empenhando e desenvolvendo para ficar cada vez melhor e conseguir o
          meu primeiro emprego."
        download={true}
      />
    </section>
  );
}
