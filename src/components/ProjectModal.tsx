import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { PortfolioItem } from "../data/portfolio";

type Props = {
  item: PortfolioItem | null;
  onClose: () => void;
};

export default function ProjectModal({ item, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] bg-[var(--color-ink)]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[var(--color-cream)] rounded-3xl max-w-3xl w-full max-h-[88vh] overflow-y-auto"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close project details"
              className="sticky top-4 float-right mr-4 z-10 w-10 h-10 rounded-full bg-[var(--color-cream)] border border-[var(--color-line)] flex items-center justify-center hover:bg-[var(--color-cream-deep)] transition-colors"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-10 pt-16">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-medium bg-[var(--color-rose)] text-[var(--color-ink)] px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-[var(--color-ink-soft)]">{item.year}</span>
              </div>

              <h2
                id="project-modal-title"
                className="font-[var(--font-display)] text-3xl sm:text-4xl leading-tight"
              >
                {item.title}
              </h2>
              <p className="mt-4 text-[var(--color-ink-soft)] leading-relaxed max-w-xl">
                {item.description}
              </p>

              <div className="mt-8 rounded-2xl overflow-hidden">
                <img
                  src={item.images[0]}
                  alt={`Primary image from the ${item.title} project`}
                  className="w-full h-[280px] sm:h-[380px] object-cover"
                />
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xs tracking-wide text-[var(--color-rose-deep)] font-medium mb-1.5">
                    Objective
                  </h3>
                  <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                    {item.objective}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs tracking-wide text-[var(--color-rose-deep)] font-medium mb-1.5">
                    Creative idea
                  </h3>
                  <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{item.idea}</p>
                </div>
                <div>
                  <h3 className="text-xs tracking-wide text-[var(--color-rose-deep)] font-medium mb-1.5">
                    Execution
                  </h3>
                  <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                    {item.execution}
                  </p>
                </div>
              </div>

              {item.images.length > 1 && (
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {item.images.slice(1).map((src, i) => (
                    <img
                      key={src + i}
                      src={src}
                      alt={`Additional image ${i + 2} from the ${item.title} project`}
                      className="w-full h-[180px] object-cover rounded-xl"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}

              <div className="mt-8 rounded-2xl bg-[var(--color-sage)]/40 p-5">
                <h3 className="text-xs tracking-wide text-[var(--color-ink)] font-medium mb-1.5">
                  Result
                </h3>
                <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{item.result}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
