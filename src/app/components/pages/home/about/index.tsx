import { Card } from "@/app/components/Card";
import { Title } from "@/app/components/Title";

export function About() {
  return (
    <section className="container py-16">
      <Title
        title="Sobre mim"
        desc="Aqui você irá saber um pouco mais sobre mim."
      />
      <Card />
    </section>
  );
}
