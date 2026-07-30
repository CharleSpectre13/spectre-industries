import { AGENT_PROFILES, AGENT_TOOLS } from "@/data/agent-tools";
import {
  COMPOUND_LOOP,
  MEMORY_LAYERS,
  S007_HEADLINE,
  S007_LEDE,
  S007_PITCH,
} from "@/data/s007-memory";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AgentsSection() {
  return (
    <section
      id="agents"
      className="mx-auto max-w-[70rem] px-5 pb-20 md:pb-28"
      aria-labelledby="agents-title"
    >
      <div className="mb-10 max-w-2xl">
        <p className="mb-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-accent">
          S007 · Spectre007
        </p>
        <h2
          id="agents-title"
          className="font-display text-[clamp(2rem,4.5vw,3rem)] font-medium leading-tight text-fg"
        >
          {S007_HEADLINE}
        </h2>
        <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">{S007_LEDE}</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {S007_PITCH.map((p) => (
            <li
              key={p.id}
              className="border-l border-accent/50 pl-3 font-display text-[1.02rem] italic leading-snug text-fg"
            >
              {p.line}
            </li>
          ))}
        </ul>
      </div>

      {/* Memory mechanics */}
      <div
        id="s007-memory"
        className="mb-12 border border-border-strong bg-surface"
        data-memory-mechanics
      >
        <div className="border-b border-border px-5 py-4 md:px-7">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-accent">
            Memory mechanics
          </p>
          <h3 className="mt-1 font-display text-2xl font-medium text-fg">
            Four layers. Context is never the database.
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            S007 agents store state outside the chat window — so they still know
            your floor after the tab closes.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {MEMORY_LAYERS.map((m, i) => (
            <div
              key={m.id}
              data-memory-layer={m.id}
              className={cn(
                "border-border px-5 py-5",
                i < 3 && "lg:border-r",
                i < 2 && "border-b sm:border-b lg:border-b-0",
                i === 2 && "border-b sm:border-b-0 lg:border-b-0",
                i % 2 === 0 && "sm:border-r lg:border-r",
              )}
            >
              <span className="text-[0.65rem] uppercase tracking-[0.12em] text-subtle">
                {m.tier}
              </span>
              <p className="mt-1 font-display text-lg text-fg">{m.name}</p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.06em] text-accent">
                {m.plain}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compounding strategies */}
      <div
        id="s007-compound"
        className="mb-12"
        data-compounding
      >
        <div className="mb-5 max-w-xl">
          <p className="mb-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-accent">
            Compounding strategies
          </p>
          <h3 className="font-display text-2xl font-medium text-fg">
            Execute. Learn. Update. Repeat.
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Closed self-learning loop. Safety gates never get weaker. Errors
            become training signal for the whole fleet.
          </p>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COMPOUND_LOOP.map((step) => (
            <li
              key={step.id}
              data-compound-step={step.id}
              className="border border-border bg-surface px-4 py-4"
            >
              <span className="font-display text-xl text-accent/80">
                {step.index}
              </span>
              <p className="mt-1 font-display text-lg text-fg">{step.name}</p>
              <p className="mt-1 text-sm leading-snug text-muted">{step.line}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div
          className="grid content-start gap-3"
          aria-label="Agent status"
          data-agents-status
        >
          {AGENT_PROFILES.map((a) => (
            <div
              key={a.id}
              className="border border-border bg-surface px-4 py-4"
              data-agent-name={a.name}
              data-agent-live={a.live ? "true" : "false"}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "h-2 w-2 shrink-0 rounded-full",
                    a.live
                      ? "bg-live shadow-[0_0_10px_color-mix(in_oklab,var(--color-live)_55%,transparent)]"
                      : "bg-build shadow-[0_0_10px_color-mix(in_oklab,var(--color-build)_45%,transparent)]",
                  )}
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-medium text-fg">{a.name}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.04em] text-subtle">
                    {a.role}
                  </p>
                </div>
              </div>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {a.tools.map((tid) => {
                  const t = AGENT_TOOLS.find((x) => x.id === tid);
                  return (
                    <li
                      key={tid}
                      className="rounded-full border border-border px-2.5 py-0.5 text-[0.65rem] uppercase tracking-[0.05em] text-subtle"
                    >
                      {t?.name ?? tid}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          <div className="pt-1">
            <Button asChild>
              <a href="#contact">Claim the $4 seat</a>
            </Button>
          </div>
        </div>

        <div
          className="border border-border-strong bg-[radial-gradient(ellipse_at_100%_0%,color-mix(in_oklab,var(--color-accent)_6%,transparent),transparent_45%),var(--color-surface)]"
          data-agent-tools
        >
          <div className="border-b border-border px-5 py-4">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-accent">
              Tool shelf
            </p>
            <p className="mt-1 font-display text-xl text-fg">
              Twelve tools. Four agents. Getting sharper.
            </p>
          </div>
          <ul className="divide-y divide-border">
            {AGENT_TOOLS.map((tool) => (
              <li
                key={tool.id}
                className="grid gap-1 px-5 py-3.5 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-4"
                data-tool={tool.id}
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className="text-sm font-medium text-fg">
                      {tool.name}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.08em] text-subtle">
                      {tool.agent}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {tool.description}
                  </p>
                </div>
                <span
                  className={cn(
                    "mt-1 shrink-0 text-[0.65rem] font-medium uppercase tracking-[0.08em]",
                    tool.status === "live" ? "text-live" : "text-build",
                  )}
                >
                  {tool.status === "live" ? "Live" : "Build"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
