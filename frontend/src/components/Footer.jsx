import { Instagram, MessageCircle, Globe, Mail, Phone } from "lucide-react";
import { NAV_LINKS, SITE, waLink } from "@/config/site";
import { scrollToSection } from "@/lib/lenis";

export default function Footer() {
  return (
    <footer className="bg-[#241F1C] text-cream/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/atyra-logo-circle.png"
                alt="Atyra logo"
                className="h-12 w-12 shrink-0 rounded-full object-cover"
              />
              <span className="font-serif text-3xl tracking-wide text-cream">Atyra</span>
            </div>
            <p className="mt-4 font-script text-2xl text-rose">{SITE.tagline}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram-link"
                aria-label="Atyra on Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href={SITE.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-facebook-link"
                aria-label="Atyra on Facebook"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
              >
                <span className="text-lg font-bold leading-none" aria-hidden="true">f</span>
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp-link"
                aria-label="Chat with Atyra on WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
              >
                <MessageCircle size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cream/50">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.hash}>
                  <a
                    href={l.hash}
                    data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(l.hash);
                    }}
                    className="text-sm transition-colors duration-200 hover:text-terracotta"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cream/50">Get in Touch</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-terracotta">
                  <Phone size={14} className="mr-2 inline-block" aria-hidden="true" />{SITE.whatsappNumber}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-terracotta">
                  <Mail size={14} className="mr-2 inline-block" aria-hidden="true" />{SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.websiteUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-terracotta">
                  <Globe size={14} className="mr-2 inline-block" aria-hidden="true" />{SITE.website}
                </a>
              </li>
              <li>
                <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-terracotta">
                  Instagram: {SITE.instagram.handle}
                </a>
              </li>
              <li>
                <a href={SITE.facebook.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-terracotta">
                  Facebook: {SITE.facebook.handle}
                </a>
              </li>
              <li className="text-cream/60">{SITE.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-cream/50">
        © 2026 Atyra. All rights reserved. · Made by hand, created for you.
      </div>
    </footer>
  );
}
