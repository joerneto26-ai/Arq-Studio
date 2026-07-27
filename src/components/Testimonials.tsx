import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { ArrowRight, Check, Whatsapp } from "./icons";
import { compromisos, waLink } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      id="compromisos"
      className="relative overflow-hidden bg-forest-950 py-20 text-bone-50 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brass-500/12 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Compromisos por escrito"
          title="Lo que firmamos antes de mover un dedo"
          lead="Somos un estudio joven y eso nos obliga a ser más claros que nadie: cada compromiso va por escrito desde el día uno."
        />

        <div className="no-scrollbar -mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0">
          {compromisos.map((c) => (
            <Reveal key={c.title} className="min-w-[82%] snap-center sm:min-w-0">
              <div className="group relative h-full overflow-hidden rounded-2xl glass-dark p-7 transition-colors duration-300 hover:border-brass-400/30">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-brass-500/30 bg-brass-500/10 text-brass-300">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-bone-50">
                  {c.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-bone-100/90">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 flex items-center justify-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-bone-200/60 sm:hidden">
          Desliza
          <ArrowRight className="h-3.5 w-3.5 animate-nudge-right" />
        </p>

        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <Button
              href={waLink(
                "Hola ARQSTUDIO, quiero conocer cómo trabajan y sus compromisos por escrito."
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="sand"
              size="lg"
            >
              <Whatsapp className="h-5 w-5" /> Hablar con nosotros
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
