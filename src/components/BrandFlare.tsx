import { BRAND_COST_LINE, BRAND_FLARE } from "@/data/brand";
import { cn } from "@/lib/utils";

/** Leads every major section — Business Consultation + AI integration flare. */
export function BrandFlare({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "max-w-2xl text-[0.95rem] leading-relaxed text-muted md:text-[1.02rem]",
        className,
      )}
      data-brand-flare
    >
      {BRAND_FLARE}
    </p>
  );
}

/** Cost closer — use at section ends / hero emphasis. */
export function BrandCostLine({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "text-[0.9rem] font-medium leading-relaxed text-accent md:text-[0.95rem]",
        className,
      )}
      data-brand-cost
    >
      {BRAND_COST_LINE}
    </p>
  );
}
