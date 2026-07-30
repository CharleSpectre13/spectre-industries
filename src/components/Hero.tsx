import { Button } from "@/components/ui/button";
import { SpectreMark } from "@/components/SpectreMark";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[70rem] px-5 pb-12 pt-14 md:pb-16 md:pt-24"
      aria-labelledby="hero-title"
    >
      <div className="grid items-end gap-10 md:grid-cols-[1.3fr_0.9fr] md:gap-16">
        <div>
          <p className="mb-5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-accent">
            S007 · Spectre Industries
          </p>
          <h1
            id="hero-title"
            className="font-display text-[clamp(2.5rem,6.5vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.02em] text-fg"
          >
            Best of the best
            <br />
            <em className="not-italic text-accent">doesn’t need a boardroom.</em>
          </h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            Consultation. S007 agents that never stop learning.{" "}
            <strong className="font-medium text-fg">Got You Paid</strong> when
            the deal closes. Independent operators running like industry
            trendsetters — without the corporate payroll.
          </p>
          <p className="mt-3 max-w-md text-[0.95rem] font-medium leading-relaxed text-accent">
            S007 seat: $4/mo. Compounding memory. Overlooked power.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#got-you-paid">Got You Paid</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#agents">S007 memory</a>
            </Button>
          </div>
        </div>

        <aside className="min-h-[14rem] border border-border-strong bg-surface md:min-h-[17rem]">
          <div className="flex h-full min-h-[14rem] flex-col justify-between p-6 md:min-h-[17rem]">
            <div className="flex items-start justify-between gap-3">
              <span className="text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                01 / House mark
              </span>
              <SpectreMark className="h-12 w-12 text-accent" />
            </div>
            <p className="font-display text-[1.5rem] italic leading-snug text-fg">
              Excellence in the shadows.
            </p>
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.06em] text-subtle">
              <span>Ohio · Remote</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>Building 2026</span>
            </div>
          </div>
        </aside>
      </div>

      <ul
        className="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="House lines"
      >
        {[
          "S007: constantly learning. Extremely powerful.",
          "Four memory layers. Nothing useful forgotten.",
          "Overlooked until they run your floor.",
          "Got You Paid — yes to paid, no fog.",
        ].map((line) => (
          <li
            key={line}
            className="border-l border-border-strong pl-3.5 font-display text-[1.05rem] italic leading-snug text-fg"
          >
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
}
