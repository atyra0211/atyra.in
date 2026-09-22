import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/config/site";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-16">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-[440px]">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-b-[2.5rem] rounded-t-[999px] border border-lavender"
            />
            <div className="overflow-hidden rounded-b-[2rem] rounded-t-[999px] shadow-[0_30px_80px_rgba(45,38,35,0.14)]">
              <img
                src={IMAGES.aboutMain}
                alt="Artisan hands crafting a handmade gift with yarn"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 w-40 rotate-3 overflow-hidden rounded-2xl border-4 border-white shadow-[0_18px_44px_rgba(45,38,35,0.16)] sm:-right-10 sm:w-52">
              <img
                src={IMAGES.aboutSecond}
                alt="Crochet and craft materials on the Atyra worktable"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <span className="absolute -left-6 top-8 inline-block -rotate-6 rounded-full bg-blush px-4 py-2 font-script text-xl text-terracotta shadow-sm">
              est. with love
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-terracotta">
              Our Story
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Creativity meets <em className="italic text-terracotta">thoughtfulness.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-cocoa">
              <p>
                Welcome to Atyra, where creativity meets thoughtfulness, and every creation is made with love.
              </p>
              <p>
                Atyra is a creative arts and crafts brand specialising in handmade and customised gifts,
                hampers, accessories and décor. We believe that the best gifts are the ones that carry a
                personal touch, which is why we create unique pieces based on your ideas, occasions,
                preferences and requirements.
              </p>
              <p>
                From customised handmade gift hampers and beautiful woolen/yarn hair bands to crochets,
                handmade pockets, pipe-cleaner bouquets and other handcrafted creations, every Atyra product
                is thoughtfully designed and carefully made.
              </p>
              <p>
                Whether you're celebrating a birthday, anniversary, festival, special milestone, or simply
                want to make someone smile, we turn your ideas into meaningful handmade creations.
              </p>
              <p>
                At Atyra, it's not just about making crafts; it's about creating memories, expressing
                emotions and making every gift a little more special.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-9 -rotate-2 font-script text-4xl text-terracotta sm:text-5xl">
              Made by hand. Created for you.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
