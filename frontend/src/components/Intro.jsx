import { Reveal } from "@/components/Reveal";

export default function Intro() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <Reveal>
          <p className="font-serif text-2xl leading-snug text-ink sm:text-[2rem]">
            Welcome to <em className="italic text-terracotta">Atyra</em> — a little space where creativity,
            colours and thoughtful gifting come together.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 text-lg leading-relaxed text-cocoa">
            From personalised hampers to delicate crochet creations and charming handmade bouquets, every
            piece is created with care and a personal touch.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-12 bg-terracotta/40" />
            <span className="h-2 w-2 rounded-full bg-terracotta/60" />
            <span className="h-px w-12 bg-terracotta/40" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
