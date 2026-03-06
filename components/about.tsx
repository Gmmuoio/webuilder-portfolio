"use client";

import { motion } from "framer-motion";

const HIGHLIGHTS = [
  { label: "Foco", value: "Microsaas & produtos IA" },
  { label: "Abordagem", value: "Do zero ao ar, sem burocracia" },
  { label: "Stack", value: "Next.js, NestJS, Supabase, OpenAI" },
  { label: "Modelo", value: "B2B SaaS, nicho específico" },
];

export function About() {
  return (
    <section id="sobre" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#00C4BE] text-sm font-medium tracking-widest uppercase mb-3">
              Sobre
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
              webuilder.gm
            </h2>
            <div className="space-y-4 text-[#A0A0A0] leading-relaxed">
              <p>
                Sou Guilherme, desenvolvedor full-stack com foco em construir
                produtos digitais que resolvem problemas reais de nichos
                específicos.
              </p>
              <p>
                A ideia do webuilder.gm é simples: identificar um problema
                claro, construir a solução mais direta possível usando IA onde
                faz sentido, e levar ao ar rápido.
              </p>
              <p>
                Cada produto nasce de uma dor observada — em clientes,
                segmentos ou conversas. Sem feature bloat, sem over-engineering.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.label}
                className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <p className="text-[#A0A0A0] text-xs uppercase tracking-wider mb-1.5">
                  {item.label}
                </p>
                <p className="text-white text-sm font-medium">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
