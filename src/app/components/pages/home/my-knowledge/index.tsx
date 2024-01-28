"use client";

import { CardTechs } from "@/app/components/cardtechs";
import { Title } from "@/app/components/Title";
import { KnownTech } from "@/app/types/project";
import { motion } from "framer-motion";

interface MyKnowledgeProps {
  techs: KnownTech[];
}

export function MyKnowledge({ techs }: MyKnowledgeProps) {
  return (
    <section className="container py-16">
      <Title
        title="Tecnologias e Ferramentas"
        desc="Fique a vontade para explorar todas as minhas competências e meus conhecimentos."
      />
      <div>
        <div className="mb-12">
          <div className="flex items-center justify-center lg:justify-normal gap-4 flex-wrap">
            {techs.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150 }}
                transition={{ duration: 0.15, delay: i * 0.1 }}
              >
                <CardTechs tech={tech} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
