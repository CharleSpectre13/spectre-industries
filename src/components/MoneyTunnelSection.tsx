import { Button } from "@/components/ui/button";
import {
  PAY_INTEGRATION,
  PRICE_TIERS,
  TUNNEL_STAGES,
} from "@/data/money-tunnel";
import { cn } from "@/lib/utils";

export function MoneyTunnelSection() {
  return (
    <section
      id="got-you-paid"
      className="border-y border-border bg-gradient-to-b from-white/[0.015] to-transparent"
      aria-labelledby="got-you-paid-title"
    >
      <div className="mx-auto max-w-[70rem] px-5 py-20 md:py-28">
        <header className="mb-10 max-w-2xl">
          <p className="mb-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-accent">
            S007 · Spectre Industries
          </p>
          <h2
            id="got-you-paid-title"
            className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-tight text-fg"
          >
            Got You Paid.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
            The commercial rail under the house. S007 seat → operator systems →
            Spectre Pay at close. You keep the relationship. We keep the pipe
            clean. Catchier name. Same force.
          </p>
        </header>

        <ol
          className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Got You Paid stages"
        >
          {TUNNEL_STAGES.map((s) => (
            <li
              key={s.id}
              className="border border-border bg-surface px-4 py-4"
            >
              <span className="font-display text-2xl text-accent/80">
                {s.index}
              </span>
              <p className="mt-1 font-display text-lg text-fg">{s.title}</p>
              <p className="mt-1 text-sm leading-snug text-muted">{s.line}</p>
            </li>
          ))}
        </ol>

        <div
          id="spectre-pay"
          className="mb-14 border border-border-strong bg-surface"
        >
          <div className="border-b border-border px-5 py-4 md:px-7 md:py-5">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-accent">
              Spectre Pay · Integration
            </p>
            <h3 className="mt-1 font-display text-2xl font-medium text-fg md:text-[1.75rem]">
              How money actually moves
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-[0.95rem]">
              Local-first crypto checkout. S007 listens on the rail — follow-up,
              ledger, and every run feeds agent memory.
            </p>
          </div>
          <ol className="grid md:grid-cols-2">
            {PAY_INTEGRATION.map((step, i) => (
              <li
                key={step.id}
                className={cn(
                  "border-border px-5 py-5 md:px-7",
                  i % 2 === 0 && "md:border-r",
                  i < 2 && "border-b",
                )}
              >
                <span className="text-[0.65rem] uppercase tracking-[0.12em] text-subtle">
                  Step 0{i + 1}
                </span>
                <p className="mt-1.5 font-display text-lg text-fg">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-accent">
                Operator pricing
              </p>
              <h3 className="font-display text-2xl font-medium text-fg md:text-[1.75rem]">
                Specific numbers. No fog.
              </h3>
            </div>
            <p className="max-w-xs text-right text-xs leading-relaxed text-subtle">
              S007 agents compound. Four dollars. Usually overlooked until they
              run the floor.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4" role="list">
            {PRICE_TIERS.map((tier) => (
              <article
                key={tier.id}
                role="listitem"
                data-tier={tier.id}
                data-status={tier.status}
                className={cn(
                  "flex flex-col border border-border bg-surface p-5 transition-[border-color,transform] duration-200",
                  "hover:-translate-y-0.5 hover:border-accent/35",
                  tier.featured &&
                    "border-accent/45 bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_oklab,var(--color-accent)_10%,transparent),transparent_60%),var(--color-surface)]",
                )}
              >
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-subtle">
                  {tier.label}
                </p>
                <h4 className="mt-1 font-display text-xl text-fg">
                  {tier.product}
                </h4>
                <p className="mt-3 font-display text-[1.85rem] font-medium leading-none tracking-tight text-accent">
                  {tier.price}
                  {tier.unit ? (
                    <span className="ml-1 font-sans text-base font-normal text-muted">
                      {tier.unit}
                    </span>
                  ) : null}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-subtle">
                  {tier.note}
                </p>
                <ul className="mb-5 mt-4 grid flex-1 gap-2">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="relative pl-3.5 text-sm leading-snug text-muted before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={tier.featured ? "primary" : "ghost"}
                  size="block"
                >
                  <a href={tier.href}>{tier.cta}</a>
                </Button>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-xl font-display text-lg italic leading-snug text-fg">
          Got You Paid. S007 on the wire.
        </p>
      </div>
    </section>
  );
}
