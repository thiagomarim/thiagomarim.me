"use client";

import { Project } from "@/app/types/project";
import { ProjectCard } from "./project-card";
import { motion } from "framer-motion";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="container py-32 grid gap-6 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </section>
  );
}
