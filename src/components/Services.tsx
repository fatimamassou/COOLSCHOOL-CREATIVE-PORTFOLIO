import { motion } from "framer-motion";
import { Camera, Film, Share2, Sparkles, CalendarDays, School } from "lucide-react";
import { services } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

const icons = [Camera, Film, Share2, Sparkles, CalendarDays, School];
const tints = [
  "bg-[var(--color-rose)]",
  "bg-[var(--color-blue)]",
  "bg-[var(--color-peach)]",
  "bg-[var(--color-lavender)]",
  "bg-[var(--color-sage)]",
  "bg-[var(--color-cream-deep)]",
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 sm:py-32 bg-[var(--color-cream-deep)]/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Services" title="What I create" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.article
                key={s.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] p-7 overflow-hidden"
              >
                <div
                  className={`absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-70 ${tints[i % tints.length]}`}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-display)] text-2xl text-[var(--color-ink-soft)]">
                      {s.number}
                    </span>
                    <Icon size={20} className="text-[var(--color-ink-soft)]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-[var(--font-display)] text-2xl">{s.title}</h3>
                  <p className="mt-2.5 text-sm text-[var(--color-ink-soft)] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
