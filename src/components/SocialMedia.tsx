import { motion } from "framer-motion";
import { AtSign, Heart, MessageCircle, Send } from "lucide-react";
import { socialCards } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function SocialMedia() {
  return (
    <section id="social" className="px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <SectionTitle
            eyebrow="Social media"
            title="From camera roll to timeline"
            subtitle="Every post starts with an idea — then a shot list, an edit and a caption."
          />
          <motion.div
            initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden sm:flex w-14 h-14 rounded-full bg-[var(--color-lavender)] items-center justify-center"
          >
            <AtSign size={22} className="text-[var(--color-ink)]" />
          </motion.div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-2xl overflow-hidden bg-[var(--color-cream)] border border-[var(--color-line)]"
            >
              <div className="flex items-center gap-2.5 px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-rose)] to-[var(--color-peach)]" />
                <div className="leading-tight">
                  <p className="text-xs font-medium">coolschool.official</p>
                  <p className="text-[10px] text-[var(--color-ink-soft)]">{card.label}</p>
                </div>
              </div>
              <img
                src={card.image}
                alt={`${card.label}: ${card.caption}`}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="px-4 py-3">
                <p className="text-sm">
                  <span className="font-medium">coolschool.official</span>{" "}
                  <span className="text-[var(--color-ink-soft)]">{card.caption}</span>
                </p>
                <div className="mt-2.5 flex items-center gap-4 text-[var(--color-ink-soft)]">
                  <Heart size={16} />
                  <MessageCircle size={16} />
                  <Send size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
