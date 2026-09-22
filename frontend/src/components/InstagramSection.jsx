import { Instagram } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { INSTAGRAM_POSTS, SITE } from "@/config/site";

export default function InstagramSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <SectionHeading
          eyebrow="Instagram"
          title="See What We're Creating"
          description="Follow Atyra for new creations, behind-the-scenes moments and customised orders."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {INSTAGRAM_POSTS.map((url, i) => (
            <Reveal key={url} delay={i * 0.08}>
              <a
                href={SITE.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`instagram-tile-${i + 1}`}
                aria-label={`View Atyra on Instagram — post ${i + 1}`}
                className="group relative block overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(45,38,35,0.06)]"
              >
                <img
                  src={url}
                  alt={`Handmade creation by Atyra — Instagram post ${i + 1}`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-ink/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram size={28} className="text-cream" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <a
              href={SITE.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="instagram-follow-link"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-rose via-terracotta to-gold px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(200,125,103,0.4)]"
            >
              <Instagram size={18} aria-hidden="true" /> Follow us on Instagram
            </a>
            <p className="mt-3 text-sm text-cocoa">{SITE.instagram.handle}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
