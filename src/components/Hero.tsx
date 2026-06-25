import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pt-44"
    >
      {/* glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#c4f82a]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-[360px] w-[360px] rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="grain pointer-events-none absolute inset-0 opacity-60" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-5xl text-center"
      >
        <motion.div
          variants={item}
          className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-[#232327] bg-white/5 px-4 py-1.5 text-xs text-neutral-300"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#c4f82a]" />
          Available for new projects · 2026
        </motion.div>

        <motion.h1
          variants={item}
          className="font-[var(--font-display)] text-balance text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.5rem]"
        >
          Bold ideas,
          <br />
          <span className="text-[#c4f82a]">crafted</span> into digital.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-balance text-lg text-neutral-400"
        >
          Quadlabs is a freelance digital studio building standout brands,
          websites and products for ambitious founders and teams.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#c4f82a] px-7 py-3.5 font-semibold text-[#0a0a0b] transition-transform hover:scale-[1.03]"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-[#232327] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/5"
          >
            View our work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
