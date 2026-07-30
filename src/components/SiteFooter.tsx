import { SpectreMark } from "@/components/SpectreMark";
import { BRAND_TAGLINE } from "@/data/brand";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-[#070708] px-5 pb-8 pt-10">
      <div className="mx-auto mb-8 flex max-w-[70rem] flex-wrap items-start justify-between gap-6">
        <div className="flex max-w-md items-start gap-3">
          <SpectreMark className="mt-0.5 h-9 w-9 text-accent" />
          <div>
            <p className="font-display text-lg font-semibold text-fg">
              Spectre Industries
            </p>
            <p className="mt-1 text-sm text-subtle">{BRAND_TAGLINE}</p>
            <p className="mt-2 text-xs leading-relaxed text-subtle">
              S007 · Got You Paid · industry trendsetters
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-5" aria-label="Footer">
          {[
            ["#work", "Work"],
            ["#got-you-paid", "Got You Paid"],
            ["#agents", "S007"],
            ["#about", "About"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm tracking-wide text-muted transition-colors hover:text-fg"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="https://x.com/CharleSpectre"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm tracking-wide text-muted transition-colors hover:text-fg"
        >
          X / Twitter
        </a>
      </div>
      <div className="mx-auto flex max-w-[70rem] flex-wrap justify-between gap-3 border-t border-border pt-5">
        <p className="text-xs text-subtle">
          © {year} Spectre Industries. All rights reserved.
        </p>
        <p className="text-xs text-subtle">S007 · $4/mo · always compounding</p>
      </div>
    </footer>
  );
}
