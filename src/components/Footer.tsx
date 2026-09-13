export default function Footer() {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="px-6 pt-16 pb-8 border-t border-[var(--color-line)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <div>
          <p className="font-[var(--font-display)] text-2xl">COOLSCHOOL</p>
          <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
            Creative Social Media Portfolio
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-ink-soft)]">
          <a href="#home" onClick={scrollTo("#home")} className="hover:text-[var(--color-ink)]">
            Home
          </a>
          <a href="#work" onClick={scrollTo("#work")} className="hover:text-[var(--color-ink)]">
            Work
          </a>
          <a href="#contact" onClick={scrollTo("#contact")} className="hover:text-[var(--color-ink)]">
            Contact
          </a>
          <a
            href="https://instagram.com/coolschool.official"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-ink)]"
          >
            Instagram
          </a>
          <a href="mailto:hello@coolschool.creative" className="hover:text-[var(--color-ink)]">
            Email
          </a>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[var(--color-line)] flex flex-col sm:flex-row justify-between gap-2 text-xs text-[var(--color-ink-soft)]">
        <span>© 2026 CoolSchool Creative Portfolio</span>
        <span className="font-hand text-base">made with intention ✦ fatima massou</span>
      </div>
    </footer>
  );
}
