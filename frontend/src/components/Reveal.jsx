import { motion, useReducedMotion } from "framer-motion";
import { Flower2 } from "lucide-react";

export const EASE = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, y = 30, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, accent, description, align = "center", light = false }) {
  const alignCls = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls}`}>
      <span
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] ${
          light ? "text-rose" : "text-terracotta"
        }`}
      >
        <Flower2 size={14} aria-hidden="true" /> {eyebrow}
      </span>
      <h2
        className={`font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title} {accent && <em className="italic text-terracotta">{accent}</em>}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
            light ? "text-cream/70" : "text-cocoa"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
