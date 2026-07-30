/** S007 agent tool catalog — constantly learning, overlooked power. */

export type AgentTool = {
  id: string;
  name: string;
  agent: string;
  description: string;
  status: "live" | "build";
};

export type AgentProfile = {
  id: string;
  name: string;
  role: string;
  live: boolean;
  tools: string[];
};

export const AGENT_PROFILES: AgentProfile[] = [
  {
    id: "consultation",
    name: "Consultation Agent",
    role: "Strategy · Always learning",
    live: true,
    tools: ["floor-map", "stack-fit", "sprint-brief"],
  },
  {
    id: "promo",
    name: "Promo Agent",
    role: "VIGIL · Always learning",
    live: true,
    tools: ["code-drop", "channel-pack", "compliance-check"],
  },
  {
    id: "sales",
    name: "Sales Organizer",
    role: "CRM layer · In build",
    live: false,
    tools: ["lead-score", "outreach-draft", "deal-hook"],
  },
  {
    id: "powerhouse",
    name: "Powerhouse Brain",
    role: "Command · Always on · Always learning",
    live: true,
    tools: ["research-loop", "content-pulse", "memory-write"],
  },
];

export const AGENT_TOOLS: AgentTool[] = [
  {
    id: "floor-map",
    name: "Floor Map",
    agent: "Consultation Agent",
    description:
      "Learns your floor in one walkthrough. Writes episodic + profile memory so the next diagnostic starts ahead.",
    status: "live",
  },
  {
    id: "stack-fit",
    name: "Stack Fit",
    agent: "Consultation Agent",
    description:
      "Scores tools against roster size and close style. Remembers what failed last time — compound, don’t repeat.",
    status: "live",
  },
  {
    id: "sprint-brief",
    name: "Sprint Brief",
    agent: "Consultation Agent",
    description:
      "Packages diagnosis into a 30-day Operator Sprint. Brief quality rises with every closed sprint in fleet memory.",
    status: "live",
  },
  {
    id: "code-drop",
    name: "Code Drop",
    agent: "Promo Agent",
    description:
      "Issues and rotates promo codes under VIGIL. Biases the next drop toward packs that actually converted.",
    status: "live",
  },
  {
    id: "channel-pack",
    name: "Channel Pack",
    agent: "Promo Agent",
    description:
      "Short-form promo in your voice. Trained on what stops the scroll — not generic AI sludge.",
    status: "live",
  },
  {
    id: "compliance-check",
    name: "Compliance Check",
    agent: "Promo Agent",
    description:
      "Secondary goal verification before publish. Safety that never weakens when learning updates.",
    status: "live",
  },
  {
    id: "lead-score",
    name: "Lead Score",
    agent: "Sales Organizer",
    description:
      "Ranks inbound by close probability using dealership-grade signals. Learns your floor’s true winners.",
    status: "build",
  },
  {
    id: "outreach-draft",
    name: "Outreach Draft",
    agent: "Sales Organizer",
    description:
      "Consent-aware follow-ups. Sharpens tone from every reply you actually send.",
    status: "build",
  },
  {
    id: "deal-hook",
    name: "Deal Hook",
    agent: "Sales Organizer",
    description:
      "Hooks Got You Paid checkout to a deal ID so paid status routes back to the right lead — every time.",
    status: "build",
  },
  {
    id: "research-loop",
    name: "Research Loop",
    agent: "Powerhouse Brain",
    description:
      "Market and competitor signal into a daily brief. Memory compounds — nothing useful gets forgotten.",
    status: "live",
  },
  {
    id: "content-pulse",
    name: "Content Pulse",
    agent: "Powerhouse Brain",
    description:
      "Personality-preserving X drafts. Learns your bangers, drops the sludge. Overlooked because it doesn’t shout.",
    status: "live",
  },
  {
    id: "memory-write",
    name: "Memory Write",
    agent: "Powerhouse Brain",
    description:
      "Persists operator decisions into profile + fleet layers so the whole house gets stronger every week.",
    status: "live",
  },
];
