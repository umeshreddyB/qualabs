import { ArrowUpRight } from "lucide-react";
import { work } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects we're proud of."
          />
          <Reveal>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c4f82a] hover:underline"
            >
              Start yours <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {work.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.1}>
              <a
                href={w.url}
                target={w.url.startsWith("http") ? "_blank" : undefined}
                rel={w.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-3xl border border-[#232327] bg-[#141416] transition-transform duration-300 hover:-translate-y-1 hover:border-[#c4f82a]/40"
              >
                <img
                  src={w.image}
                  alt={`${w.title} preview`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/70 to-transparent" />
                <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#c4f82a]" />
                <div className="relative p-7">
                  <span className="text-xs uppercase tracking-widest text-[#c4f82a]">
                    {w.category}
                  </span>
                  <h3 className="mt-2 font-[var(--font-display)] text-2xl font-bold">
                    {w.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-white/70">
                    {w.desc}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
