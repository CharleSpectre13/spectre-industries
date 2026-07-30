import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  title?: string;
};

/**
 * Spectre Industries mark — Wayne Enterprises discipline × LexCorp force.
 * Shield geometry, monogram SI, spectral vertical axis. SVG only.
 */
export function SpectreMark({
  className,
  title = "Spectre Industries",
}: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Outer shield — corporate fortress */}
      <path
        d="M32 4L54 12.5V30.5C54 44.2 45.4 55.4 32 60C18.6 55.4 10 44.2 10 30.5V12.5L32 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Inner shield plane */}
      <path
        d="M32 9.5L48.5 16V30.2C48.5 41.1 42 50.2 32 54.2C22 50.2 15.5 41.1 15.5 30.2V16L32 9.5Z"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Vertical spectral axis */}
      <path
        d="M32 14V50"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.45"
      />
      {/* Horizontal beam */}
      <path
        d="M20 30H44"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.35"
      />
      {/* Crown / apex diamond — spectral power */}
      <path
        d="M32 13L36.2 20H27.8L32 13Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
      {/* Monogram S — primary letterform */}
      <path
        d="M38.2 25.2C38.2 22.6 35.8 21 32 21C28.2 21 25.6 22.7 25.6 25.4C25.6 27.6 27.1 28.7 31.2 29.7L33.8 30.4C37.6 31.3 39.4 33 39.4 36C39.4 39.6 36.2 41.8 32 41.8C27.4 41.8 24.4 39.5 24.2 35.6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base bar — foundation / industries */}
      <path
        d="M24 46.5H40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M27 49H37"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Wordmark lockup for headers / footer */
export function SpectreLockup({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <SpectreMark className="h-7 w-7 text-accent" />
      <span className="font-display text-lg font-semibold tracking-wide text-fg">
        Spectre Industries
      </span>
    </span>
  );
}
