import { motion } from "framer-motion";
import { processSteps } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Process() {
  return (
    <section id="process" className="px-6 py-24 sm:py-32 bg-[var(--color-cream-deep)]/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Process" title="From idea to post" />

        <div className="mt-16 relative">
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-[var(--color-line)]"
          />
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-[var(--color-rose-deep)]"
          />

          <div className="grid md:grid-cols-5 gap-10 md:gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-[var(--color-cream)] border-2 border-[var(--color-rose-deep)] flex items-center justify-center font-[var(--font-display)] text-sm">
                  {step.number}
                </div>
                <h3 className="mt-5 font-[var(--font-display)] text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
