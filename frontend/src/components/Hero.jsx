import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Gift, Heart, Palette, Sparkles } from "lucide-react";
import { EASE } from "@/components/Reveal";
import { IMAGES, SITE } from "@/config/site";
import { scrollToSection } from "@/lib/lenis";

const CLAIMS = [
  { icon: Gift, text: "Made to order" },
  { icon: Palette, text: "Customised for every occasion" },
  { icon: Sparkles, text: "One of a kind" },
];

const LINES = [
  { text: "Handmade.", accent: false },
  { text: "Customised.", accent: false },
  { text: "Made with Love.", accent: true },
];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pb-24 pt-28 sm:pt-36 lg:pb-32">
      <motion.div style={{ y: glowY }} aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blush/60 blur-3xl" />
        <div className="absolute -right-32 top-40 h-[380px] w-[380px] rounded-full bg-lavender/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-sage/40 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-terracotta/25 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-terracotta backdrop-blur"
          >
            <Sparkles size={13} aria-hidden="true" /> A handcrafted boutique
          </motion.span>

          <h1 className="mt-7 font-serif text-[clamp(2.8rem,7vw,5.4rem)] font-medium leading-[1.05] tracking-tight text-ink">
            {LINES.map((line, i) => (
              <span key={line.text} className="line-mask">
                <motion.span
                  className={`block ${line.accent ? "italic text-terracotta" : ""}`}
                  initial={{ y: "112%", rotate: 3 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.2 + i * 0.16 }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.65 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-cocoa"
          >
            {SITE.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-explore-button"
              onClick={() => scrollToSection("#creations")}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta hover:shadow-[0_14px_34px_rgba(200,125,103,0.35)]"
            >
              Explore Our Creations
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              data-testid="hero-custom-order-button"
              onClick={() => scrollToSection("#custom-orders")}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
            >
              <Heart size={15} className="text-terracotta" /> Create a Custom Gift
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3"
          >
            {CLAIMS.map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-2 text-sm font-medium text-cocoa">
                <Icon size={15} className="text-gold" aria-hidden="true" /> {text}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div style={{ y: imgY }} className="relative mx-auto w-full max-w-[460px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-b-[2.5rem] rounded-t-[999px] border border-terracotta/30"
            />
            <div className="overflow-hidden rounded-b-[2rem] rounded-t-[999px] shadow-[0_30px_80px_rgba(45,38,35,0.16)]">
              <img
                src={IMAGES.hero}
                alt="Handmade pastel bouquet crafted by Atyra"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -left-8 -top-6 hidden animate-spin-slow sm:block" aria-hidden="true">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <defs>
                  <path id="atyra-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <text
                  className="fill-terracotta"
                  style={{ fontSize: "10.5px", letterSpacing: "2.6px", fontFamily: "Manrope, sans-serif", fontWeight: 600 }}
                >
                  <textPath href="#atyra-circle">HANDMADE • MADE WITH LOVE • ATYRA •</textPath>
                </text>
              </svg>
              <Heart size={18} className="absolute inset-0 m-auto text-terracotta" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
              className="absolute -bottom-10 -left-6 w-36 rounded-2xl border border-beige bg-white p-2.5 pb-8 shadow-[0_18px_44px_rgba(45,38,35,0.14)] sm:-left-14 sm:w-44"
            >
              <img
                src={IMAGES.heroPolaroid}
                alt="Tiny crochet flowers made by hand"
                className="aspect-square w-full rounded-xl object-cover"
              />
              <span className="absolute inset-x-0 bottom-1.5 text-center font-script text-lg text-cocoa">
                stitched with joy
              </span>
            </motion.div>

            <motion.div
              animate={reduce ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-16 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 shadow-[0_12px_30px_rgba(45,38,35,0.12)] backdrop-blur sm:-right-8"
            >
              <Heart size={14} className="text-rose" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-ink">100% handmade</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
