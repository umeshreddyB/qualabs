import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
}: Props) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c4f82a]">
        <span className="h-px w-6 bg-[#c4f82a]" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-[var(--font-display)] text-3xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-neutral-400">{desc}</p>}
    </Reveal>
  );
}
