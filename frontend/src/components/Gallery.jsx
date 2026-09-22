import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHeading, EASE } from "@/components/Reveal";
import { GALLERY, GALLERY_FILTERS } from "@/config/site";

export default function Gallery({ filter, onFilterChange }) {
  const filtered = filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  return (
    <section id="gallery" className="scroll-mt-24 bg-creamdeep/70 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <SectionHeading
          eyebrow="Gallery"
          title="A peek at"
          accent="the little things."
          description="Hampers, crochet, accessories and bouquets — every piece one of a kind, every piece made to order."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {GALLERY_FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  data-testid={`gallery-filter-${f.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => onFilterChange(f)}
                  aria-pressed={active}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    active
                      ? "bg-ink text-cream shadow-[0_10px_24px_rgba(45,38,35,0.2)]"
                      : "border border-beige bg-white text-cocoa hover:border-terracotta hover:text-terracotta"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((g) => (
              <motion.figure
                key={g.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="group relative mb-5 break-inside-avoid overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(45,38,35,0.06)]"
              >
                <img
                  src={g.url}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${g.aspect}`}
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/70">
                      {g.category}
                    </span>
                    <p className="font-serif text-lg text-cream">{g.title}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
