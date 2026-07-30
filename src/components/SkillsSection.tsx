import { SKILLS } from "@/data/projects";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-[70rem] px-5 py-20 md:py-28"
      aria-labelledby="skills-title"
    >
      <div className="mb-10 max-w-2xl">
        <p className="mb-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-accent">
          Capabilities
        </p>
        <h2
          id="skills-title"
          className="font-display text-[clamp(2rem,4.5vw,3rem)] font-medium leading-tight text-fg"
        >
          Four desks. Zero theater.
        </h2>
        <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
          Consultation, agents, rails, gaming — each desk earns its keep or gets
          cut.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((block) => (
          <div
            key={block.title}
            className="border border-border bg-surface p-5"
          >
            <h3 className="mb-4 border-b border-border pb-3 font-display text-xl font-medium text-fg">
              {block.title}
            </h3>
            <ul className="grid gap-2.5">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="relative pl-3.5 text-sm text-muted before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
