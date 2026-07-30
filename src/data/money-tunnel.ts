/** Spectre Industries Got You Paid — S007 commercial rail + operator pricing. */

export type TunnelStage = {
  id: string;
  index: string;
  title: string;
  line: string;
};

export type PayIntegrationStep = {
  id: string;
  title: string;
  detail: string;
};

export type PriceTier = {
  id: string;
  label: string;
  product: string;
  price: string;
  unit?: string;
  note: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
  status: "live" | "build" | "scoped";
};

export const TUNNEL_STAGES: TunnelStage[] = [
  {
    id: "entry",
    index: "01",
    title: "S007 seat",
    line: "Agents that learn. Four bucks. No reset.",
  },
  {
    id: "operator",
    index: "02",
    title: "Operator",
    line: "Diagnostics + systems sized to your floor.",
  },
  {
    id: "rail",
    index: "03",
    title: "Got You Paid",
    line: "Spectre Pay moves money. S007 follows up.",
  },
  {
    id: "scale",
    index: "04",
    title: "Scale",
    line: "Full stack when the numbers demand it.",
  },
];

export const PAY_INTEGRATION: PayIntegrationStep[] = [
  {
    id: "close",
    title: "You close the deal",
    detail:
      "Operator owns the conversation, terms, and relationship. No middleman pitching your customer.",
  },
  {
    id: "checkout",
    title: "Local-first checkout",
    detail:
      "Spectre Pay opens a crypto-native rail at close — wallet or invoice link, ledgered to that deal.",
  },
  {
    id: "hooks",
    title: "S007 hooks fire",
    detail:
      "On paid / pending / failed: Promo and Sales agents get the signal. Follow-up without retyping — and the run feeds memory.",
  },
  {
    id: "ledger",
    title: "Clear ledger, no fog",
    detail:
      "Deal ID, amount, status, agent actions — one trail. Built for closers who refuse black-box dashboards.",
  },
];

export const PRICE_TIERS: PriceTier[] = [
  {
    id: "entry",
    label: "S007 Entry",
    product: "Spectre007 agent seat",
    price: "$4",
    unit: "/ mo",
    note: "Live · compounding agents under VIGIL",
    features: [
      "Memory that doesn’t reset — episodic + playbook",
      "Promo + research that get sharper every run",
      "Overlooked power: four dollars, fleet-grade force",
    ],
    cta: "Take the seat",
    href: "#contact",
    status: "live",
  },
  {
    id: "diagnostic",
    label: "Floor Map",
    product: "Operator diagnostic",
    price: "$497",
    unit: " one session",
    note: "90-minute floor walk + written stack map",
    features: [
      "Sales / ops workflow mapped live",
      "AI fit shortlist for your roster size",
      "Monday-ready action sheet",
      "Credits fully into Operator Sprint if you continue",
    ],
    cta: "Book diagnostics",
    href: "#contact",
    featured: true,
    status: "live",
  },
  {
    id: "sprint",
    label: "Operator Sprint",
    product: "30-day build",
    price: "$2,497",
    unit: " fixed",
    note: "Consultation + S007 wiring for one floor",
    features: [
      "Full operator diagnostic included",
      "S007 agents configured to your playbook",
      "Got You Paid checkout wired for your deals",
      "Two live check-ins + stop-condition review",
    ],
    cta: "Lock a sprint",
    href: "#contact",
    status: "live",
  },
  {
    id: "house",
    label: "Full Stack",
    product: "House systems",
    price: "From $7,500",
    note: "Sales Organizer · Powerhouse · multi-agent",
    features: [
      "CRM intelligence + lead scoring",
      "Powerhouse Brain orchestration",
      "Custom Got You Paid rails",
      "Quoted after Floor Map — never a fake “from” without scope",
    ],
    cta: "Talk full stack",
    href: "#contact",
    status: "scoped",
  },
];
