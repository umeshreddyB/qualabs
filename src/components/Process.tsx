import { processSteps } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section
      id="process"
      className="border-y border-[#232327] bg-[#0d0d0f] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How we work"
          title="A simple, transparent process."
          desc="No surprises. You'll always know what's happening and what's next."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-[#232327] bg-[#141416] p-7">
                <span className="font-[var(--font-display)] text-5xl font-bold text-[#232327]">
                  {p.no}
                </span>
                <h3 className="mt-4 font-[var(--font-display)] text-xl font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
