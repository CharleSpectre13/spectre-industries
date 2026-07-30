import { useMemo, useState } from "react";
import {
  CATEGORIES,
  PROJECTS,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

type FilterId = "all" | ProjectCategory;

export function WorkSection() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section
      id="work"
      className="mx-auto max-w-[70rem] px-5 py-20 md:py-28"
      aria-labelledby="work-title"
    >
      <div className="mb-10 max-w-2xl">
        <p className="mb-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-accent">
          Selected work
        </p>
        <h2
          id="work-title"
          className="font-display text-[clamp(2rem,4.5vw,3rem)] font-medium leading-tight text-fg"
        >
          What’s on the floor right now
        </h2>
        <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
          Six live bets. Hover a card for the real pitch — no case-study theater.
        </p>
      </div>

      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {CATEGORIES.map((c) => {
          const active = filter === c.id;
          return (
            <button
              key={c.id}
              type="button"
              data-filter={c.id}
              aria-pressed={active}
              onClick={() => setFilter(c.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.06em] transition-colors duration-150",
                active
                  ? "border-accent/45 bg-accent/10 text-accent"
                  : "border-border-strong text-muted hover:border-muted hover:text-fg",
              )}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div
        id="project-grid"
        className="grid gap-5 sm:grid-cols-2"
        data-filter-active={filter}
      >
        {visible.map((p) => {
          const isOpen = openId === p.id;
          return (
            <article
              key={p.id}
              data-category={p.category}
              data-project-id={p.id}
              tabIndex={0}
              className={cn(
                "group flex flex-col overflow-hidden border border-border bg-surface outline-none transition-[border-color,transform] duration-200",
                "hover:-translate-y-0.5 hover:border-accent/35 focus-visible:border-accent/50",
                isOpen && "border-accent/35",
              )}
              onClick={() => {
                if (
                  window.matchMedia("(hover: hover) and (pointer: fine)").matches
                )
                  return;
                setOpenId((cur) => (cur === p.id ? null : p.id));
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenId((cur) => (cur === p.id ? null : p.id));
                }
              }}
            >
              <div className="flex min-h-[8.5rem] items-start justify-between border-b border-border bg-surface-2 px-5 py-4">
                <span className="font-display text-3xl font-medium text-accent/80">
                  {p.index}
                </span>
                <span className="text-[0.6875rem] uppercase tracking-[0.12em] text-subtle">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-medium text-fg">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{p.tagline}</p>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows,margin] duration-300 ease-[var(--ease-out)]",
                    "grid-rows-[0fr] group-hover:mt-4 group-hover:grid-rows-[1fr] group-focus-within:mt-4 group-focus-within:grid-rows-[1fr]",
                    isOpen && "mt-4 grid-rows-[1fr]",
                  )}
                  data-reveal
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-muted">
                      {p.description}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-border px-2.5 py-1 text-[0.6875rem] uppercase tracking-[0.06em] text-subtle"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-8 text-sm text-subtle" id="filter-empty">
          No projects in this category yet.
        </p>
      ) : null}
    </section>
  );
}
