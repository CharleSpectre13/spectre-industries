/** S007 memory mechanics + compounding — from Spectre007 agent architecture. */

export type MemoryLayer = {
  id: string;
  tier: string;
  name: string;
  plain: string;
  detail: string;
};

export type CompoundStep = {
  id: string;
  index: string;
  name: string;
  line: string;
};

export type PitchLine = {
  id: string;
  line: string;
};

/** Hierarchical memory — context window is never the database. */
export const MEMORY_LAYERS: MemoryLayer[] = [
  {
    id: "working",
    tier: "L1",
    name: "Working memory",
    plain: "What’s live right now",
    detail:
      "Active deal, current tool call, open thread. Cleared when the job ends — never the long-term store.",
  },
  {
    id: "episodic",
    tier: "L2",
    name: "Episodic memory",
    plain: "Every run, kept raw",
    detail:
      "Full trajectories: what the agent tried, what worked, what failed. Provenance attached so nothing floats free.",
  },
  {
    id: "profile",
    tier: "L3",
    name: "Profile / playbook",
    plain: "What your floor actually is",
    detail:
      "Distilled patterns — close style, promo voice, stop rules, operator preferences. Updates after every meaningful sprint.",
  },
  {
    id: "fleet",
    tier: "L4",
    name: "Fleet share",
    plain: "One agent’s win, house knowledge",
    detail:
      "Structured handoffs only — no free-form chat between agents. Typed contracts push hard-won patterns to the whole S007 fleet.",
  },
];

/** Closed self-learning loop — compounding strategy. */
export const COMPOUND_LOOP: CompoundStep[] = [
  {
    id: "execute",
    index: "01",
    name: "Execute",
    line: "Run the job under contracts, stop conditions, and secondary goal checks.",
  },
  {
    id: "observe",
    index: "02",
    name: "Observe",
    line: "Capture trajectory, tool results, errors — full context into episodic memory.",
  },
  {
    id: "evaluate",
    index: "03",
    name: "Evaluate",
    line: "Score outcomes. Prefer hard success/fail signals over soft vibes.",
  },
  {
    id: "learn",
    index: "04",
    name: "Learn",
    line: "Distill wins and corrected misses into profile + fleet knowledge.",
  },
  {
    id: "update",
    index: "05",
    name: "Update",
    line: "Baseline, playbook, and verifier heuristics shift so the same miss is rarer next time.",
  },
  {
    id: "repeat",
    index: "06",
    name: "Repeat",
    line: "Next job starts smarter. That’s compounding — not a reset every morning.",
  },
];

/** Pitch refinements — short, high-impact S007 lines. */
export const S007_PITCH: PitchLine[] = [
  {
    id: "core",
    line: "S007 agents don’t forget the floor. They compound on it.",
  },
  {
    id: "memory",
    line: "Four memory layers. Context window is never the database.",
  },
  {
    id: "power",
    line: "Extremely powerful at the end of the day — usually overlooked until they run.",
  },
  {
    id: "price",
    line: "$4 a month. Learning never clocks out.",
  },
];

export const S007_HEADLINE =
  "S007 — constantly learning. Extremely powerful. Overlooked.";

export const S007_LEDE =
  "Spectre007 agents keep working memory for the job, episodic logs for every run, a playbook that updates with your floor, and fleet share so one win strengthens the house. They don’t reset at midnight. They compound.";
