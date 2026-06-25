import { offerings } from "../data";

export default function Marquee() {
  const row = [...offerings, ...offerings];
  return (
    <section className="border-y border-[#232327] bg-[#0d0d0f] py-8">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-neutral-500">
        Work we provide
      </p>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
          {row.map((c, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-[var(--font-display)] text-2xl font-semibold text-neutral-600 transition-colors hover:text-neutral-300"
            >
              {c}
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4f82a]/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
