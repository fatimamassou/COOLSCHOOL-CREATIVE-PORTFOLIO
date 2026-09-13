import { motion } from "framer-motion";

const stats = [
  { number: "01", label: "Creative direction" },
  { number: "02", label: "Photography" },
  { number: "03", label: "Video editing" },
  { number: "04", label: "Social media" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-[2px] overflow-hidden bg-white p-2 pb-6 shadow-[0_25px_50px_-24px_rgba(43,38,32,0.35)] rotate-[-1.5deg]">
            <img
              src="https://picsum.photos/seed/about-portrait/700/860"
              alt="Portrait of the CoolSchool content creator holding a camera"
              className="w-full h-[420px] sm:h-[480px] object-cover"
              loading="lazy"
            />
          </div>
          <span className="absolute -bottom-3 -right-3 sm:right-2 bg-[var(--color-sage)] text-[var(--color-ink)] text-xs font-medium px-4 py-2 rounded-full rotate-3 shadow-[0_10px_25px_-12px_rgba(43,38,32,0.4)]">
            behind the lens since 2023
          </span>
        </motion.div>

        <div>
          <p className="font-hand text-2xl text-[var(--color-rose-deep)] mb-2">About</p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="font-[var(--font-display)] text-4xl sm:text-5xl leading-[1.08] max-w-lg"
          >
            More than a camera behind the scenes.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-[var(--color-ink-soft)] text-lg leading-relaxed max-w-lg"
          >
            I create visual content that captures the energy, creativity and
            everyday moments of school life — working across photography,
            video, editing, social media, creative direction, content
            planning and visual storytelling, so CoolSchool's online presence
            actually feels like being there.
          </motion.p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 max-w-lg">
            {stats.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="font-[var(--font-display)] text-3xl text-[var(--color-rose-deep)]">
                  {s.number}
                </div>
                <div className="mt-1 text-sm text-[var(--color-ink-soft)] leading-snug">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
