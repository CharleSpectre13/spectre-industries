export function AboutSection() {
  return (
    <section
      id="about"
      className="border-y border-border bg-gradient-to-b from-white/[0.015] to-transparent"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid max-w-[70rem] gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-28">
        <div>
          <p className="mb-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-accent">
            About
          </p>
          <h2
            id="about-title"
            className="font-display text-[clamp(2rem,4.5vw,3rem)] font-medium leading-tight text-fg"
          >
            Sold cars. Now we ship systems.
          </h2>
        </div>
        <div>
          <p className="text-[1.05rem] leading-relaxed text-muted">
            Thirteen-plus years in high-stakes sales and finance. Full-time now
            on product, Spectre007 agents, and tools independent operators can
            actually run without a war room.
          </p>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            Te Pō Spectre on Stake Engine is real work. Gaming stays. The lead
            is still consultation and AI — because that’s what moves a small
            roster into industry-trendsetter territory.
          </p>
          <dl className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
            <div>
              <dt className="mb-1 text-[0.6875rem] uppercase tracking-[0.12em] text-subtle">
                Base
              </dt>
              <dd className="font-display text-lg text-fg">Ohio, United States</dd>
            </div>
            <div>
              <dt className="mb-1 text-[0.6875rem] uppercase tracking-[0.12em] text-subtle">
                Mode
              </dt>
              <dd className="font-display text-lg text-fg">Close · Build · Ship</dd>
            </div>
            <div>
              <dt className="mb-1 text-[0.6875rem] uppercase tracking-[0.12em] text-subtle">
                Standard
              </dt>
              <dd className="font-display text-lg text-fg">Best of the best</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
