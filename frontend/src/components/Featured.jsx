import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { PRODUCTS } from "@/config/site";

export default function Featured({ onEnquire }) {
  return (
    <section id="creations" className="scroll-mt-24 bg-creamdeep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <SectionHeading
          eyebrow="Featured Creations"
          title="Fresh from the"
          accent="craft table."
          description="A peek at recent pieces — every one can be remade in your own colours and occasion. Because pricing depends on your requirements, each piece is a custom quote."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.08} className="h-full">
              <article
                data-testid={`featured-product-card-${p.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_8px_30px_rgba(45,38,35,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_44px_rgba(200,125,103,0.14)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} — handmade by Atyra`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-terracotta backdrop-blur">
                    {p.priceTag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{p.category}</span>
                  <h3 className="mt-2 font-serif text-xl text-ink">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-cocoa">{p.description}</p>
                  <button
                    data-testid={`product-enquire-button-${p.id}`}
                    onClick={() => onEnquire(p)}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-terracotta/40 px-5 py-2.5 text-sm font-semibold text-terracotta transition-all duration-300 hover:bg-terracotta hover:text-cream"
                  >
                    {p.cta}
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
