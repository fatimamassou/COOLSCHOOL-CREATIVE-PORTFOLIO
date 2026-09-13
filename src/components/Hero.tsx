import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-6 overflow-hidden"
    >
      {/* decorative dots */}
      <div
        aria-hidden="true"
        className="absolute top-24 left-4 w-2 h-2 rounded-full bg-[var(--color-sage)] hidden sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-10 w-3 h-3 rounded-full bg-[var(--color-peach)] hidden sm:block"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center"
      >
        <div>
          <motion.p variants={rise} className="font-hand text-2xl text-[var(--color-rose-deep)] mb-3">
            Photography · Video · Social Media
          </motion.p>

          <motion.h1
            variants={rise}
            className="font-[var(--font-display)] text-[13vw] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[5.2rem] lg:leading-[1.02] text-[var(--color-ink)]"
          >
            I turn{" "}
            <span className="relative inline-block">
              <span className="relative z-10">school moments</span>
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 bottom-1 h-[0.4em] bg-[var(--color-rose)] -rotate-1 z-0"
              />
            </span>{" "}
            into stories.
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-7 text-lg text-[var(--color-ink-soft)] max-w-md leading-relaxed"
          >
            Photography, video, social media and creative content for
            CoolSchool — turning ordinary days into visuals people stop to
            look at.
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-cursor-hover
              className="group inline-flex items-center gap-2 bg-[var(--color-ink)] text-[var(--color-cream)] rounded-full px-6 py-3.5 text-sm font-medium"
            >
              View my work
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                →
              </span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-cursor-hover
              className="inline-flex items-center gap-2 border border-[var(--color-ink)]/30 rounded-full px-6 py-3.5 text-sm font-medium hover:border-[var(--color-ink)] transition-colors"
            >
              Let's create
            </a>
          </motion.div>
        </div>

        {/* collage */}
        <motion.div variants={rise} className="relative h-[420px] sm:h-[500px] lg:h-[560px]">
          <motion.figure
            initial={{ opacity: 0, y: 30, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-2 w-[62%] rounded-[2px] bg-white p-2 pb-8 shadow-[0_25px_50px_-20px_rgba(43,38,32,0.35)]"
          >
            <img
              src="https://picsum.photos/seed/hero-main/700/860"
              alt="Students gathered during a school event, photographed candidly"
              className="w-full h-[280px] sm:h-[340px] object-cover rounded-[1px]"
              loading="eager"
            />
            <span className="absolute bottom-2 left-3 font-hand text-lg text-[var(--color-ink-soft)]">
              spring fair, 2026
            </span>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 30, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 w-[42%] rounded-2xl overflow-hidden shadow-[0_20px_45px_-18px_rgba(43,38,32,0.35)] border-4 border-[var(--color-cream)]"
          >
            <img
              src="https://picsum.photos/seed/hero-vert/500/720"
              alt="Vertical, Instagram-style shot of a student activity"
              className="w-full h-[240px] sm:h-[300px] object-cover"
            />
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="absolute right-2 bottom-10 w-[46%] rounded-2xl bg-[var(--color-blue)] p-5 shadow-[0_20px_40px_-20px_rgba(43,38,32,0.3)]"
          >
            <p className="font-[var(--font-display)] text-xl leading-tight text-[var(--color-ink)]">
              Captured with intention.
            </p>
            <p className="mt-2 text-xs text-[var(--color-ink)]/70">
              Edited with personality. Shared with purpose.
            </p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 24, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute left-6 bottom-0 w-[38%] bg-white p-2 pb-6 shadow-[0_20px_40px_-18px_rgba(43,38,32,0.35)]"
          >
            <img
              src="https://picsum.photos/seed/hero-polaroid/420/420"
              alt="Polaroid-style photograph of a classroom moment"
              className="w-full h-[130px] object-cover"
            />
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="hidden sm:flex absolute -left-2 bottom-20 flex-col gap-1 font-hand text-lg text-[var(--color-sage-deep)] rotate-[-4deg]"
          >
            <span>photo</span>
            <span>video</span>
            <span>edit</span>
            <span>post</span>
            <span>repeat ✦</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs text-[var(--color-ink-soft)]"
        data-cursor-hover
      >
        scroll
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}
