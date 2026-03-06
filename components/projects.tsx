"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-[#00C4BE] text-sm font-medium tracking-widest uppercase mb-3">
            Produtos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            O que está sendo construído
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
