import {
  Baby,
  Cake,
  Flower2,
  Gem,
  GraduationCap,
  Heart,
  PartyPopper,
  Sparkles,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { OCCASIONS } from "@/config/site";

const ICONS = { Cake, Heart, GraduationCap, Flower2, PartyPopper, Baby, Gem, Sparkles };

const OCCASION_OPTION_BY_LABEL = {
  Birthdays: "Birthday",
  Anniversaries: "Anniversary",
  Graduation: "Graduation",
  "Special Celebrations": "Special Celebration",
  Festivals: "Festival / Holiday",
  "Baby Showers": "Baby Shower",
  Engagements: "Engagement",
  "Just Because": "Just Because",
};
const CHIP_BG = [
  "bg-blush text-terracotta",
  "bg-sage text-ink",
  "bg-lavender text-terracotta",
  "bg-blush text-terracotta",
  "bg-sage text-ink",
  "bg-lavender text-terracotta",
  "bg-blush text-terracotta",
  "bg-sage text-ink",
];

export default function Occasions({ onPick }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-8 lg:px-16">
        <SectionHeading
          eyebrow="Occasions"
          title="Gifts for every"
          accent="little celebration."
          description="Tell us the moment and we'll design something that fits it perfectly. Pick an occasion to start your enquiry."
        />

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
            {OCCASIONS.map((occ, i) => {
              const Icon = ICONS[occ.icon];
              return (
                <button
                  key={occ.label}
                  data-testid={`occasion-chip-${occ.label.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => onPick(OCCASION_OPTION_BY_LABEL[occ.label] || occ.label)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(200,125,103,0.2)] ${CHIP_BG[i]}`}
                >
                  <Icon size={16} aria-hidden="true" /> {occ.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <button
            data-testid="occasions-cta"
            onClick={() => onPick("")}
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta hover:shadow-[0_14px_34px_rgba(200,125,103,0.35)]"
          >
            <Sparkles size={16} aria-hidden="true" /> Create Something Special
          </button>
        </Reveal>
      </div>
    </section>
  );
}
