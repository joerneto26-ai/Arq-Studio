import { Reveal, StaggerGroup, StaggerItem } from "./ui/Reveal";
import { featureIcons, ArrowRight } from "./icons";
import { certificaciones } from "@/lib/content";

export function TrustBar() {
  return (
    <section className="relative border-b border-bone-200/70 bg-bone-50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
            Acreditaciones y forma de trabajo
          </p>
        </Reveal>

        <StaggerGroup className="no-scrollbar -mx-5 mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {certificaciones.map((c) => {
            const Icon = featureIcons[c.icon as keyof typeof featureIcons];
            return (
              <StaggerItem
                key={c.title}
                className="min-w-[78%] snap-center first:ml-0 sm:min-w-0"
              >
                <div className="group flex h-full flex-col items-center rounded-2xl border border-bone-200/80 bg-white px-6 py-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brass-400/40 hover:shadow-card">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-brass-500/12 text-brass-600 transition-colors duration-300 group-hover:bg-brass-500/20">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-[0.95rem] font-semibold leading-snug text-ink-900">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-stone-600">
                    {c.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <p className="mt-5 flex items-center justify-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500 sm:hidden">
          Desliza
          <ArrowRight className="h-3.5 w-3.5 animate-nudge-right" />
        </p>
      </div>
    </section>
  );
}
