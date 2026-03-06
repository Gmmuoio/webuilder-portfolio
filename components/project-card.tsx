"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project, ProjectStatus } from "@/types/project";

const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  live: {
    label: "Live",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  building: {
    label: "Building",
    className: "bg-[#F45CDC]/10 text-[#F45CDC] border-[#F45CDC]/20",
  },
  beta: {
    label: "Beta",
    className: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  placeholder: {
    label: "Em breve",
    className: "bg-white/5 text-[#A0A0A0] border-white/10",
  },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const status = STATUS_CONFIG[project.status];
  const isPlaceholder = project.status === "placeholder";
  const isVivanda = project.id === "vivanda";

  if (isPlaceholder) {
    return (
      <motion.div
        className="relative rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6 flex flex-col items-center justify-center min-h-[280px] opacity-50"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 0.5, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="text-4xl mb-3 text-white/20">+</div>
        <p className="text-[#A0A0A0] text-sm font-medium">{project.name}</p>
        <p className="text-[#A0A0A0]/60 text-xs mt-1">{project.tagline}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={`/projetos/${project.id}`}
        className={`group block rounded-2xl border bg-white/[0.02] overflow-hidden transition-all duration-300 ${
          isVivanda
            ? "border-[#00C4BE]/30 shadow-[0_0_30px_rgba(0,196,190,0.07)] hover:border-[#00C4BE]/60 hover:shadow-[0_0_50px_rgba(0,196,190,0.15)]"
            : "border-white/[0.08] hover:border-white/[0.18]"
        }`}
      >
        {/* Screenshot / Mockup area */}
        <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-white/[0.03] to-transparent overflow-hidden border-b border-white/[0.06]">
          {project.screenshot ? (
            <Image
              src={project.screenshot}
              alt={`Screenshot do ${project.name}`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <ScreenshotPlaceholder />
          )}
          {isVivanda && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#00C4BE]/10 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-white font-semibold text-lg leading-tight group-hover:text-[#00E5D0] transition-colors">
              {project.name}
            </h3>
            <span
              className={`flex-shrink-0 text-xs font-medium px-2.5 py-0.5 rounded-full border ${status.className}`}
            >
              {status.label}
            </span>
          </div>

          <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-md bg-white/[0.04] text-[#A0A0A0] border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="text-xs px-2 py-0.5 rounded-md bg-white/[0.04] text-[#A0A0A0] border border-white/[0.06]">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ScreenshotPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
      {/* Mock browser bar */}
      <div className="w-full absolute top-0 px-3 py-2 bg-white/[0.03] border-b border-white/[0.06] flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 h-4 rounded bg-white/[0.04] mx-4" />
      </div>
      {/* Mock content lines */}
      <div className="flex flex-col gap-2 w-2/3 mt-8">
        <div className="h-2.5 bg-white/[0.06] rounded-full w-3/4" />
        <div className="h-2 bg-white/[0.04] rounded-full w-full" />
        <div className="h-2 bg-white/[0.04] rounded-full w-5/6" />
        <div className="h-2 bg-white/[0.04] rounded-full w-4/6 mt-2" />
      </div>
      <p className="text-[#A0A0A0]/40 text-xs absolute bottom-3">
        screenshot em breve
      </p>
    </div>
  );
}
