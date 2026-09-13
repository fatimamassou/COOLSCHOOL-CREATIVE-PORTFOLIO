import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, AtSign, Link2, ArrowUpRight, Check } from "lucide-react";
import SectionTitle from "./SectionTitle";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", projectType: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email.";
    if (!form.message.trim()) next.message = "Tell me a little about the project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Have a story worth sharing?"
            subtitle="Let's create something that feels like CoolSchool."
          />

          <div className="mt-10 space-y-4">
            <a
              href="mailto:hello@coolschool.creative"
              data-cursor-hover
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full bg-[var(--color-rose)] flex items-center justify-center shrink-0">
                <Mail size={18} />
              </span>
              <span className="text-[var(--color-ink-soft)] group-hover:text-[var(--color-ink)] transition-colors">
                hello@coolschool.creative
              </span>
            </a>
            <a
              href="https://instagram.com/coolschool.official"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full bg-[var(--color-blue)] flex items-center justify-center shrink-0">
                <AtSign size={18} />
              </span>
              <span className="text-[var(--color-ink-soft)] group-hover:text-[var(--color-ink)] transition-colors">
                @coolschool.official
              </span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full bg-[var(--color-sage)] flex items-center justify-center shrink-0">
                <Link2 size={18} />
              </span>
              <span className="text-[var(--color-ink-soft)] group-hover:text-[var(--color-ink)] transition-colors">
                CoolSchool Creative, LinkedIn
              </span>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="bg-[var(--color-cream-deep)] rounded-3xl p-7 sm:p-9 relative overflow-hidden"
        >
          <span
            aria-hidden="true"
            className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[var(--color-peach)] opacity-60"
          />
          {submitted ? (
            <div className="relative flex flex-col items-center justify-center text-center py-16">
              <span className="w-12 h-12 rounded-full bg-[var(--color-sage)] flex items-center justify-center mb-4">
                <Check size={22} />
              </span>
              <p className="font-[var(--font-display)] text-2xl">Message sent</p>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)] max-w-xs">
                Thanks for reaching out — I'll get back to you within a couple of days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="relative space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-sm focus:border-[var(--color-ink)] outline-none"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-[var(--color-rose-deep)]">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-sm focus:border-[var(--color-ink)] outline-none"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-[var(--color-rose-deep)]">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-1.5">
                  Project type
                </label>
                <input
                  id="projectType"
                  type="text"
                  placeholder="Campaign, event coverage, ongoing content…"
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-sm focus:border-[var(--color-ink)] outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-sm focus:border-[var(--color-ink)] outline-none resize-none"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-[var(--color-rose-deep)]">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                data-cursor-hover
                className="w-full inline-flex items-center justify-center gap-2 bg-[var(--color-ink)] text-[var(--color-cream)] rounded-full px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Send message
                <ArrowUpRight size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
