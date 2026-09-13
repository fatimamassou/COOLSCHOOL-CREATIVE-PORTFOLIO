import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const items = [
  { label: "Shoot", seed: "bts-shoot", rotate: -3 },
  { label: "Edit", seed: "bts-edit", rotate: 2 },
  { label: "Plan", seed: "bts-plan", rotate: -2 },
  { label: "Post", seed: "bts-post", rotate: 3 },
];

export default function BehindTheScenes() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Behind the scenes"
          title="Shoot. Edit. Plan. Post. Repeat."
          subtitle="A look at what happens before a post ever reaches the feed."
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((item, i) => (
            <motion.figure
              key={item.label}
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="bg-white p-2.5 pb-7 shadow-[0_18px_40px_-20px_rgba(43,38,32,0.35)]"
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/500/600`}
                alt={`${item.label} — part of the content creation process`}
                className="w-full h-[220px] sm:h-[260px] object-cover"
                loading="lazy"
              />
              <figcaption className="mt-2 text-center font-hand text-xl text-[var(--color-ink-soft)]">
                {item.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
