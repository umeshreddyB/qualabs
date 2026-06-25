import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#232327] bg-[#0a0a0b]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
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

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#c4f82a] px-5 py-2.5 text-sm font-semibold text-[#0a0a0b] transition-transform hover:scale-[1.03] md:inline-block"
        >
          Start a project
        </a>

        <button
          aria-label="Toggle menu"
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#232327] bg-[#0a0a0b]/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-neutral-300 hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-[#c4f82a] px-5 py-3 text-center font-semibold text-[#0a0a0b]"
              >
                Start a project
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
