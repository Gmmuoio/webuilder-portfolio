import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { Footer } from "@/components/footer";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.filter((p) => p.status !== "placeholder").map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return { title: "Projeto não encontrado — webuilder.gm" };
  }

  return {
    title: `${project.name} — webuilder.gm`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — webuilder.gm`,
      description: project.tagline,
      ...(project.screenshot && { images: [project.screenshot] }),
    },
  };
}

const STATUS_CONFIG = {
  live: { label: "Live", className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  building: { label: "Building", className: "bg-[#F45CDC]/10 text-[#F45CDC] border-[#F45CDC]/20" },
  beta: { label: "Beta", className: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  placeholder: { label: "Em breve", className: "bg-white/5 text-[#A0A0A0] border-white/10" },
};

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project || project.status === "placeholder") {
    notFound();
  }

  const status = STATUS_CONFIG[project.status];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#A0A0A0] hover:text-white transition-colors mb-10"
          >
            <span>←</span>
            <span>Todos os projetos</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${status.className}`}
            >
              {status.label}
            </span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#A0A0A0] hover:text-[#00E5D0] transition-colors flex items-center gap-1"
              >
                <ExternalLinkIcon />
                {project.url.replace(/^https?:\/\//, "")}
              </a>
            )}
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-4">
            {project.name}
          </h1>
          <p className="text-xl sm:text-2xl text-[#A0A0A0] mb-8">
            {project.tagline}
          </p>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1 rounded-full bg-white/[0.05] text-[#A0A0A0] border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div
            className={`relative w-full aspect-[16/9] rounded-2xl overflow-hidden border ${
              project.id === "vivanda"
                ? "border-[#00C4BE]/30 shadow-[0_0_60px_rgba(0,196,190,0.1)]"
                : "border-white/[0.08]"
            } bg-white/[0.02]`}
          >
            {project.screenshot ? (
              <Image
                src={project.screenshot}
                alt={`Screenshot do ${project.name}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            ) : (
              <FullScreenshotPlaceholder name={project.name} />
            )}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xs font-medium tracking-widest uppercase text-[#00C4BE] mb-4">
                Sobre o produto
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </div>

            {project.problem && (
              <div>
                <h2 className="text-xs font-medium tracking-widest uppercase text-[#00C4BE] mb-4">
                  Problema resolvido
                </h2>
                <p className="text-[#A0A0A0] leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.audience && (
              <div>
                <h2 className="text-xs font-medium tracking-widest uppercase text-[#00C4BE] mb-4">
                  Público-alvo
                </h2>
                <p className="text-[#A0A0A0] leading-relaxed">
                  {project.audience}
                </p>
              </div>
            )}
          </div>

          {/* Features sidebar */}
          {project.features.length > 0 && (
            <div>
              <h2 className="text-xs font-medium tracking-widest uppercase text-[#00C4BE] mb-4">
                Funcionalidades
              </h2>
              <ul className="space-y-2.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-[#A0A0A0]"
                  >
                    <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#00C4BE]/10 border border-[#00C4BE]/20 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C4BE]" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 items-center">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00C4BE] to-[#00E5D0] text-[#080808] font-semibold text-sm hover:opacity-90 active:scale-95 transition-all"
            >
              Acessar projeto
              <ExternalLinkIcon />
            </a>
          )}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] text-white border border-white/[0.1] font-semibold text-sm hover:bg-white/[0.08] hover:border-white/[0.2] active:scale-95 transition-all"
          >
            ← Voltar
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FullScreenshotPlaceholder({ name }: { name: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
      <div className="w-full absolute top-0 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06] flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 h-5 rounded-md bg-white/[0.04] mx-6" />
      </div>
      <div className="flex flex-col gap-3 w-1/2 mt-12">
        <div className="h-3 bg-white/[0.07] rounded-full w-2/3" />
        <div className="h-2.5 bg-white/[0.04] rounded-full w-full" />
        <div className="h-2.5 bg-white/[0.04] rounded-full w-5/6" />
        <div className="h-2.5 bg-white/[0.04] rounded-full w-4/6 mt-2" />
      </div>
      <p className="text-[#A0A0A0]/40 text-xs absolute bottom-4">
        screenshot de {name} em breve
      </p>
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}
