import { Flower2 } from "lucide-react";
import { MARQUEE_ITEMS } from "@/config/site";

function MarqueeHalf() {
  return (
    <div className="flex items-center gap-12 pr-12">
      {MARQUEE_ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-12 whitespace-nowrap font-serif text-lg italic text-cream/90"
        >
          {item} <Flower2 size={16} className="shrink-0 text-terracotta" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-hidden="true" className="relative z-10 -my-2 w-[104%] -translate-x-[2%] -rotate-1 bg-ink py-5 shadow-[0_18px_50px_rgba(45,38,35,0.25)]">
      <div className="flex w-max animate-marquee overflow-hidden">
        <MarqueeHalf />
        <MarqueeHalf />
      </div>
    </section>
  );
}
