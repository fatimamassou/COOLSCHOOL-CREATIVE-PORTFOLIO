import { motion } from "framer-motion";

const line1 = "A little bit of everything.";
const line2 = "Because good content starts with a good idea.";

function AnimatedLine({ text, delayStart }: { text: string; delayStart: number }) {
  const words = text.split(" ");
  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: "0.4em" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: delayStart + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Philosophy() {
  return (
    <section className="px-6 py-28 sm:py-36 bg-[var(--color-ink)] text-[var(--color-cream)]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-hand text-2xl text-[var(--color-rose)] mb-6">Creative philosophy</p>
        <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-6xl leading-[1.15]">
          <AnimatedLine text={line1} delayStart={0} />
          <br />
          <AnimatedLine text={line2} delayStart={0.5} />
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-8 text-[var(--color-cream)]/60 max-w-md mx-auto leading-relaxed"
        >
          The goal isn't just to create something beautiful. It's to create
          something people remember.
        </motion.p>
      </div>
    </section>
  );
}
