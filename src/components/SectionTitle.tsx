import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
  subtitle?: string;
};

export default function SectionTitle({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <p className="font-hand text-2xl text-[var(--color-rose-deep)] mb-1">{eyebrow}</p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-[var(--color-ink)]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className="mt-4 text-[var(--color-ink-soft)] text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
