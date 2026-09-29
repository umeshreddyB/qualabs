import { navLinks } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-[#232327] px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid grid-cols-2 gap-0.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#c4f82a]" />
            <span className="h-2.5 w-2.5 rounded-sm bg-[#c4f82a]/50" />
            <span className="h-2.5 w-2.5 rounded-sm bg-[#c4f82a]/50" />
            <span className="h-2.5 w-2.5 rounded-sm bg-[#c4f82a]" />
          </span>
          <span className="font-[var(--font-display)] text-lg font-bold tracking-tight">
            Quad<span className="text-[#c4f82a]">labs</span>
          </span>
        </a>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4 text-sm text-neutral-400">
          <a href="#" className="hover:text-white">
            Twitter
          </a>
          <a href="#" className="hover:text-white">
            Dribbble
          </a>
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-[#232327] pt-6 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} Quadlabs Studio. Crafted with care.
      </div>
    </footer>
  );
}
