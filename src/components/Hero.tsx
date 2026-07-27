import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, Whatsapp } from "./icons";
import { brand, waLink } from "@/lib/content";

const HERO_IMG =
  "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=2000&h=1300";

const WA_MSG =
  "Hola ARQSTUDIO, me gustaría una cotización sin compromiso para mi proyecto en Mazatlán.";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={HERO_IMG}
          alt="Arquitecto y supervisor revisando planos dentro de una obra en proceso en Mazatlán"
          className="h-full w-full object-cover"
          style={{ objectPosition: "65% center" }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/75 via-forest-950/55 to-forest-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/75 via-forest-950/10 to-transparent" />
      </motion.div>

      <div className="pointer-events-none absolute -left-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-forest-500/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-sage-300/10 blur-3xl animate-float-slow" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-24 sm:px-8 sm:pb-24 sm:pt-32">
        <Reveal>
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-bone-100/90">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-300" />
            Mazatlán, Sin. · Est. {brand.established}
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-5 max-w-4xl font-display text-[2.25rem] font-light leading-[1.08] tracking-tight text-bone-50 sm:mt-6 sm:text-6xl lg:text-[4.4rem] lg:leading-[1.05]">
            Su proyecto,{" "}
            <span className="font-medium italic text-gradient-brass accent-underline">
              diseñado, licenciado y construido
            </span>{" "}
            por un solo responsable.
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-5 max-w-md text-[0.95rem] leading-snug text-bone-200/90 sm:mt-6 sm:max-w-xl sm:text-lg sm:leading-relaxed">
            Deje de coordinar arquitecto, gestor y constructor por separado.
            En ARQSTUDIO el mismo arquitecto hace el diseño, el proyecto
            ejecutivo, la licencia y la supervisión de obra. Usted solo
            aprueba y avanza.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:items-center">
            <Button
              href={waLink(WA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              variant="sand"
              size="lg"
              className="shadow-ivory-glow w-full justify-center sm:w-auto"
            >
              <Whatsapp className="h-5 w-5" /> Solicitar cotización
            </Button>
            <Button
              href="#proyectos"
              variant="lightOutline"
              size="lg"
              className="w-full justify-center sm:w-auto"
            >
              Ver portafolio
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-10 sm:gap-x-6 sm:gap-y-3">
            <span className="text-xs text-bone-200/80 sm:text-sm">
              <span className="font-semibold text-bone-50">3 proyectos</span>{" "}
              ejecutivos entregados 2025–26
            </span>
            <span className="hidden h-8 w-px bg-bone-50/15 sm:block" />
            <span className="text-xs text-bone-200/80 sm:text-sm">
              Trato directo con el arquitecto · Sin intermediarios
            </span>
            <span className="hidden h-8 w-px bg-bone-50/15 sm:block" />
            <span className="text-xs text-bone-200/80 sm:text-sm">
              Respuesta el{" "}
              <span className="font-semibold text-bone-50">mismo día hábil</span>{" "}
              · Sin compromiso
            </span>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-bone-50/30 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-bone-50/70"
          />
        </div>
      </div>
    </section>
  );
}
