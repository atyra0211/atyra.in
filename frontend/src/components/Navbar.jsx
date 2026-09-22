import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/config/site";
import { scrollToSection } from "@/lib/lenis";

const slug = (label) => label.toLowerCase().replace(/\s+/g, "-");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (hash) => {
    setOpen(false);
    scrollToSection(hash);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-beige bg-cream/90 shadow-[0_4px_30px_rgba(45,38,35,0.05)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-16"
      >
        <a
          href="#home"
          data-testid="navbar-brand-logo"
          onClick={(e) => {
            e.preventDefault();
            go("#home");
          }}
          className="flex items-center gap-2.5"
        >
          <img
            src="/atyra-logo-circle.png"
            alt="Atyra logo"
            className="h-11 w-11 shrink-0 rounded-full object-cover"
          />
          <span className="font-serif text-2xl tracking-wide text-ink">Atyra</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.hash}
              href={l.hash}
              data-testid={`nav-link-${slug(l.label)}`}
              onClick={(e) => {
                e.preventDefault();
                go(l.hash);
              }}
              className="text-sm font-medium text-cocoa transition-colors duration-200 hover:text-terracotta"
            >
              {l.label}
            </a>
          ))}
          <button
            data-testid="navbar-custom-order-button"
            onClick={() => go("#custom-orders")}
            className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta hover:shadow-[0_10px_26px_rgba(200,125,103,0.35)]"
          >
            Custom Order
          </button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-beige bg-white/70 text-ink lg:hidden"
          data-testid="nav-mobile-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-b border-beige bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.hash}
                  href={l.hash}
                  data-testid={`nav-mobile-link-${slug(l.label)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(l.hash);
                  }}
                  className="rounded-xl px-3 py-3 font-serif text-lg text-ink transition-colors hover:bg-blush/50"
                >
                  {l.label}
                </a>
              ))}
              <button
                data-testid="nav-mobile-cta"
                onClick={() => go("#custom-orders")}
                className="mt-3 rounded-full bg-terracotta px-6 py-3 font-semibold text-cream transition-colors hover:bg-ink"
              >
                Custom Order
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
