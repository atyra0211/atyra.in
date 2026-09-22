import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { CATEGORIES } from "@/config/site";

export default function Categories({ onExplore }) {
  return (
    <section id="categories" className="scroll-mt-24 pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <SectionHeading
          eyebrow="Explore Our Creations"
          title="Made by hand,"
          accent="made for someone special."
          description="Six little worlds of handmade joy — every piece can be customised in your colours, theme and style."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.id} delay={(i % 3) * 0.1}>
              <button
                data-testid={`category-card-${cat.id}`}
                onClick={() => onExplore(cat)}
                className="group relative block h-full w-full overflow-hidden rounded-[1.75rem] text-left shadow-[0_8px_30px_rgba(45,38,35,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(200,125,103,0.18)]"
              >
                <img
                  src={cat.image}
                  alt={`${cat.title} — handmade by Atyra`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-xl text-cream sm:text-2xl">{cat.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream/80">{cat.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cream">
                    Explore
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
