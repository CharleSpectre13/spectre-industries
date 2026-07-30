export type ProjectCategory =
  | "consulting"
  | "agents"
  | "gaming"
  | "infra"
  | "content";

export type Project = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  status: "live" | "build" | "active";
};

export const CATEGORIES: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "consulting", label: "Consulting" },
  { id: "agents", label: "AI Agents" },
  { id: "gaming", label: "Gaming" },
  { id: "infra", label: "Infrastructure" },
  { id: "content", label: "Content" },
];

export const PROJECTS: Project[] = [
  {
    id: "business-consultation",
    index: "01",
    title: "Business Consultation",
    tagline: "Walk the floor before you touch the stack.",
    description:
      "Operator diagnostics for independent shops. Map sales, ops, and follow-up the way a closer sees it — then design AI and process a small team can run without an IT department.",
    category: "consulting",
    tags: ["Strategy", "AI fit", "Operators"],
    status: "live",
  },
  {
    id: "spectre007",
    index: "02",
    title: "S007 Agents",
    tagline: "Constantly learning. Extremely powerful. Overlooked.",
    description:
      "Four memory layers + a closed compound loop. Promo, research, sales assist under VIGIL — stop conditions, audit, fleet share. Live at $4/mo. Not chatbots.",
    category: "agents",
    tags: ["Live · $4/mo", "Memory", "Compounding"],
    status: "live",
  },
  {
    id: "sales-organizer",
    index: "03",
    title: "Spectre Sales Organizer",
    tagline: "Built for people who still pick up the phone.",
    description:
      "CRM intelligence and agent-assisted outreach from real dealership years. Lead scoring, consent-aware drafts, hooks into Got You Paid deal IDs.",
    category: "infra",
    tags: ["CRM", "Lead scoring", "In progress"],
    status: "build",
  },
  {
    id: "te-po-spectre",
    index: "04",
    title: "Te Pō Spectre",
    tagline: "Honest math. Stake Engine pathway.",
    description:
      "High-volatility packages, deterministic outcomes, RGS-ready architecture. Gaming stays a house pillar — consultation and systems still lead.",
    category: "gaming",
    tags: ["Stake Engine", "Provably fair", "2026"],
    status: "build",
  },
  {
    id: "spectre-pay",
    index: "05",
    title: "Got You Paid",
    tagline: "Spectre Industries commercial rail.",
    description:
      "Spectre Pay under Got You Paid: local-first crypto checkout, S007 hooks on paid/pending/failed, clear deal ledger. You own the relationship.",
    category: "infra",
    tags: ["Spectre Pay", "Got You Paid", "In build"],
    status: "build",
  },
  {
    id: "powerhouse",
    index: "06",
    title: "Powerhouse Brain",
    tagline: "One surface. Whole operation. Always learning.",
    description:
      "Research, content, code, and growth loops under persistent memory. A small roster that moves like a board — command layer for industry trendsetters.",
    category: "agents",
    tags: ["Orchestration", "Active", "Memory"],
    status: "active",
  },
];

export const SKILLS = [
  {
    title: "Business consultation",
    items: [
      "Operator diagnostics & roadmaps",
      "AI fit for teams under ten",
      "Systems that survive Monday",
      "Neck-and-neck with corporate leaders",
    ],
  },
  {
    title: "Agent systems",
    items: [
      "Hierarchical memory (L1–L4)",
      "Compound execute-learn-update loop",
      "Safety contracts & audit",
      "Fleet share via typed contracts",
    ],
  },
  {
    title: "Product & infrastructure",
    items: [
      "Got You Paid / Spectre Pay",
      "CRM & lead intelligence",
      "Content pipeline engineering",
      "Edge / Vercel deployment",
    ],
  },
  {
    title: "Interactive gaming",
    items: [
      "Stake Engine / RGS pathways",
      "Deterministic math packages",
      "High-volatility design",
      "Visual systems & animation",
    ],
  },
] as const;
