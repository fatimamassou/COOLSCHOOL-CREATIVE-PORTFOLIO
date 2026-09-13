import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioItems, type PortfolioCategory, type PortfolioItem } from "../data/portfolio";
import PortfolioCard from "./PortfolioCard";
import ProjectModal from "./ProjectModal";
import SectionTitle from "./SectionTitle";

const filters: (PortfolioCategory | "All")[] = [
  "All",
  "Photography",
  "Video",
  "Social Media",
  "Campaigns",
  "Events",
  "Design",
];

export default function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [openItem, setOpenItem] = useState<PortfolioItem | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return portfolioItems;
    return portfolioItems.filter((p) => p.tags.includes(active as PortfolioCategory));
  }, [active]);

  return (
    <section id="work" className="px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionTitle
            eyebrow="Selected work"
            title="A collection of moments"
            subtitle="A collection of moments, ideas and stories created for CoolSchool."
          />

          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2 lg:justify-end lg:max-w-sm"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                data-cursor-hover
                className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                  active === f
                    ? "bg-[var(--color-ink)] text-[var(--color-cream)] border-[var(--color-ink)]"
                    : "border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-ink)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[minmax(0,auto)]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <PortfolioCard key={item.id} item={item} onOpen={setOpenItem} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-14 text-center text-[var(--color-ink-soft)]">
            No projects in this category yet.
          </p>
        )}
      </div>

      <ProjectModal item={openItem} onClose={() => setOpenItem(null)} />
    </section>
  );
}
