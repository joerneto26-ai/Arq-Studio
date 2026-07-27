import { useId } from "react";
import { cn } from "@/utils/cn";
import { brand } from "@/lib/content";

export function Brand({
  light = false,
  compact = false,
  className,
}: {
  light?: boolean;
  compact?: boolean;
  className?: string;
}) {
  const id = useId();
  return (
    <a
      href="#top"
      aria-label={`${brand.name} — Construcción y Diseño, inicio`}
      className={cn("group flex items-center gap-3", className)}
    >
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-brass-500/40 bg-forest-900 transition-transform duration-500 group-hover:rotate-[10deg]">
        <span className="absolute inset-0 bg-gradient-to-tr from-brass-500/30 via-transparent to-transparent" />
        <svg viewBox="0 0 32 32" className="relative h-6 w-6">
          <path
            d="M5 27V14L15 5l10 9v13"
            fill="none"
            stroke={`url(#${id})`}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 5l13 12M15 10l13 11M11 27h18M22 14v13"
            fill="none"
            stroke={`url(#${id})`}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path d="M12 21h5v6h-5z" fill="#9aa522" />
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="32" y2="32">
              <stop stopColor="#dde34a" />
              <stop offset="1" stopColor="#9aa522" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-medium tracking-[0.22em]",
            light ? "text-bone-50" : "text-ink-900"
          )}
        >
          {brand.name}
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1 text-[10px] uppercase tracking-[0.28em]",
              light ? "text-bone-200/70" : "text-stone-500"
            )}
          >
            Construcción &amp; Diseño
          </span>
        )}
      </span>
    </a>
  );
}
