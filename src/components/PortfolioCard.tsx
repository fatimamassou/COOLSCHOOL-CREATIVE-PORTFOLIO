import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioItem } from "../data/portfolio";

const sizeClasses: Record<PortfolioItem["size"], string> = {
  sm: "sm:col-span-1 sm:row-span-1",
  md: "sm:col-span-1 sm:row-span-2",
  lg: "sm:col-span-2 sm:row-span-2",
  wide: "sm:col-span-2 sm:row-span-1",
  tall: "sm:col-span-1 sm:row-span-2",
};

const heightClasses: Record<PortfolioItem["size"], string> = {
  sm: "h-[260px]",
  md: "h-[420px]",
  lg: "h-[420px] sm:h-[560px]",
  wide: "h-[260px]",
  tall: "h-[420px]",
};

type Props = {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
};

export default function PortfolioCard({ item, onOpen }: Props) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpen(item)}
      data-cursor-hover
      className={`group relative text-left rounded-2xl overflow-hidden ${sizeClasses[item.size]} ${heightClasses[item.size]}`}
    >
      <img
        src={item.image}
        alt={`Cover image for the ${item.title} project`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/75 via-[var(--color-ink)]/5 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

      <div className="absolute top-4 left-4 flex gap-2">
        <span className="text-[11px] font-medium tracking-wide bg-[var(--color-cream)]/90 text-[var(--color-ink)] px-2.5 py-1 rounded-full">
          {item.category}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
        <div className="transition-transform duration-500 group-hover:-translate-y-1">
          <p className="text-[var(--color-cream)]/70 text-xs">{item.year}</p>
          <h3 className="font-[var(--font-display)] text-xl sm:text-2xl text-[var(--color-cream)] leading-tight">
            {item.title}
          </h3>
        </div>
        <span className="shrink-0 w-9 h-9 rounded-full bg-[var(--color-cream)] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={18} className="text-[var(--color-ink)]" />
        </span>
      </div>
    </motion.button>
  );
}
