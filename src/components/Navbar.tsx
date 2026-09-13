import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "max-w-5xl px-5 py-2.5 bg-[var(--color-cream)]/90 backdrop-blur-md rounded-full shadow-[0_10px_30px_-16px_rgba(43,38,32,0.35)] border border-[var(--color-line)]"
              : "max-w-6xl px-6"
          }`}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#home");
            }}
            className="flex items-baseline gap-2"
            data-cursor-hover
          >
            <span className="font-[var(--font-display)] text-lg sm:text-xl tracking-tight">
              COOLSCHOOL
            </span>
            <span className="hidden sm:inline text-[10px] tracking-[0.18em] text-[var(--color-ink-soft)] font-medium">
              CREATIVE PORTFOLIO
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(l.href);
                }}
                className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors"
                data-cursor-hover
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#contact");
            }}
            className="hidden md:inline-flex items-center gap-1 text-sm font-medium border border-[var(--color-ink)] rounded-full px-4 py-2 hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)] transition-colors"
            data-cursor-hover
          >
            Let's create
          </a>

          <button
            className="md:hidden p-2 -mr-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[var(--color-cream)] md:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(l.href);
                  }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4, ease: "easeOut" }}
                  className="font-[var(--font-display)] text-4xl py-3 border-b border-[var(--color-line)] flex items-center justify-between"
                >
                  {l.label}
                  <ArrowUpRight size={26} className="text-[var(--color-rose-deep)]" />
                </motion.a>
              ))}
            </div>
            <div className="px-8 pb-10 text-sm text-[var(--color-ink-soft)]">
              hello@coolschool.creative
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
