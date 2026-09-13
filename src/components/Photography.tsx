import { useState } from "react";
import { motion } from "framer-motion";
import { galleryPhotos } from "../data/portfolio";
import SectionTitle from "./SectionTitle";
import Lightbox from "./Lightbox";

const sizeClasses: Record<string, string> = {
  lg: "sm:col-span-2 sm:row-span-2 h-[280px] sm:h-[460px]",
  md: "sm:col-span-1 sm:row-span-2 h-[280px] sm:h-[460px]",
  sm: "sm:col-span-1 sm:row-span-1 h-[220px]",
  tall: "sm:col-span-1 sm:row-span-2 h-[280px] sm:h-[460px]",
  wide: "sm:col-span-2 sm:row-span-1 h-[220px]",
};

export default function Photography() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="photography" className="px-6 py-24 sm:py-32 bg-[var(--color-cream-deep)]/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Photography"
          title="Everyday, made visible"
          subtitle="An editorial gallery of the quiet, in-between moments of school life."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {galleryPhotos.map((photo, i) => (
            <motion.button
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              onClick={() => setActiveIndex(i)}
              data-cursor-hover
              className={`group relative rounded-2xl overflow-hidden ${sizeClasses[photo.size]}`}
            >
              <img
                src={photo.image}
                alt={photo.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[var(--color-ink)]/0 group-hover:bg-[var(--color-ink)]/25 transition-colors" />
              <span className="absolute bottom-3 left-3 font-hand text-lg text-[var(--color-cream)] opacity-0 group-hover:opacity-100 transition-opacity">
                {photo.caption}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        photos={galleryPhotos}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
