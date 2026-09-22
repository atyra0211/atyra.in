import Lenis from "lenis";

let lenis = null;

export function initLenis() {
  if (lenis) return lenis;
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  return lenis;
}

export function scrollToSection(hash) {
  const el = document.querySelector(hash);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -72, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
}
