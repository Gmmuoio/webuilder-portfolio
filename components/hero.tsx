"use client";

import { motion } from "framer-motion";

const STACK_BADGES = [
  "Next.js",
  "NestJS",
  "Supabase",
  "TypeScript",
  "OpenAI",
  "Evolution API",
  "Stripe",
  "n8n",
];

export function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center pt-16 pb-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[#A0A0A0] text-sm font-medium tracking-widest uppercase mb-6">
            webuilder.gm
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-white">Microsaas que</span>
          <br />
          <span className="bg-gradient-to-r from-[#00C4BE] to-[#00E5D0] bg-clip-text text-transparent">
            resolvem problemas
          </span>
          <br />
          <span className="text-white">reais.</span>
        </motion.h1>

        <motion.p
          className="text-[#A0A0A0] text-lg sm:text-xl max-w-xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Produtos digitais focados, com IA onde faz sentido.
          <br />
          Do zero ao ar, rápido.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {STACK_BADGES.map((tech, i) => (
            <motion.span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.05] text-[#A0A0A0] border border-white/[0.08] hover:border-[#00C4BE]/40 hover:text-[#00E5D0] transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.35 + i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
