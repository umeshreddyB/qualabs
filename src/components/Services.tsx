import { services } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to ship and grow."
          desc="One focused team across strategy, design and engineering — no hand-offs, no agency overhead."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-[#232327] bg-[#141416] p-7 transition-colors hover:border-[#c4f82a]/40">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#c4f82a]/0 blur-2xl transition-all duration-500 group-hover:bg-[#c4f82a]/10" />
                <div className="mb-6 inline-flex rounded-xl border border-[#232327] bg-[#0a0a0b] p-3 text-[#c4f82a]">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-[var(--font-display)] text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {s.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#232327] px-3 py-1 text-xs text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
