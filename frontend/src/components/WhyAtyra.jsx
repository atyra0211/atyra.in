import { Flower2, Gift, Hand, Heart, HeartHandshake, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { WHY_POINTS } from "@/config/site";

const ICONS = { Hand, Heart, Sparkles, Flower2, Gift, HeartHandshake };
const CHIP_BG = ["bg-blush", "bg-sage", "bg-lavender", "bg-blush", "bg-sage", "bg-lavender"];

export default function WhyAtyra() {
  return (
    <section className="bg-lavender/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <SectionHeading
          eyebrow="Why Atyra"
          title="Crafted with intention,"
          accent="given with heart."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_POINTS.map((point, i) => {
            const Icon = ICONS[point.icon];
            return (
              <Reveal key={point.title} delay={(i % 3) * 0.1} className="h-full">
                <div className="flex h-full flex-col items-start gap-4 rounded-[1.75rem] bg-white p-7 shadow-[0_8px_30px_rgba(45,38,35,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(200,125,103,0.12)]">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-full ${CHIP_BG[i]} text-terracotta transition-transform duration-300 group-hover:rotate-6`}
                  >
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-xl text-ink">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-cocoa">{point.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
