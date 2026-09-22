import { Instagram, Mail, MapPin, MessageCircle, Globe } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SITE, waLink } from "@/config/site";

const FacebookMark = ({ size = 20 }) => (
  <span
    aria-hidden="true"
    className="font-sans font-bold leading-none"
    style={{ fontSize: size * 0.95 }}
  >
    f
  </span>
);

export default function Contact() {
  const rows = [
    {
      icon: MessageCircle,
      label: "Phone / WhatsApp",
      value: SITE.whatsappNumber,
      href: waLink(),
      testid: "contact-whatsapp-link",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: SITE.instagram.handle,
      href: SITE.instagram.url,
      testid: "contact-instagram-link",
    },
    {
      icon: Mail,
      label: "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      testid: "contact-email-link",
    },
    {
      icon: Globe,
      label: "Website",
      value: SITE.website,
      href: SITE.websiteUrl,
      testid: "contact-website-link",
    },
    {
      icon: FacebookMark,
      label: "Facebook",
      value: SITE.facebook.handle,
      href: SITE.facebook.url,
      testid: "contact-facebook-link",
    },
    { icon: MapPin, label: "Location", value: SITE.location, href: null, testid: "contact-location" },
  ];

  return (
    <section id="contact" className="scroll-mt-24 pb-24 pt-4 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 text-cream sm:px-12 sm:py-16 lg:px-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-rose">
                  Contact
                </span>
                <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Let's Create Something <em className="italic text-terracotta">Beautiful</em>
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-cream/70">
                  The fastest way to reach us is WhatsApp — share your idea, an occasion or just say hello.
                  We usually reply the same day.
                </p>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="whatsapp-chat-button"
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-whatsapp px-9 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(37,211,102,0.4)]"
                >
                  <MessageCircle size={20} aria-hidden="true" /> Chat on WhatsApp
                </a>
              </div>

              <div className="grid gap-4">
                {rows.map((row) => {
                  const Icon = row.icon;
                  const inner = (
                    <>
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-rose">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-cream/50">
                          {row.label}
                        </span>
                        <span className="mt-1 block font-medium text-cream">{row.value}</span>
                      </span>
                    </>
                  );
                  const cls =
                    "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:translate-x-1.5 hover:bg-white/10";
                  return row.href ? (
                    <a
                      key={row.label}
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      data-testid={row.testid}
                      className={cls}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={row.label} data-testid={row.testid} className={cls}>
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
