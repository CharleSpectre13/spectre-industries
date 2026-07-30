import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  topic: z.enum([
    "consulting",
    "agents",
    "got-you-paid",
    "gaming",
    "infra",
    "partnership",
    "other",
  ]),
  message: z.string().trim().min(10).max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;

const inbox: Array<ContactInput & { id: string; receivedAt: string }> = [];

export const submitContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const entry = {
      ...data,
      id: `msg_${Date.now().toString(36)}`,
      receivedAt: new Date().toISOString(),
    };
    inbox.unshift(entry);
    if (inbox.length > 100) inbox.length = 100;
    return {
      ok: true as const,
      id: entry.id,
      routedTo: "S007",
      message: "Got it. S007 queued this for the operator.",
    };
  });

export const listContactMessages = createServerFn({ method: "GET" }).handler(
  async () => {
    return inbox.map(({ id, name, topic, receivedAt }) => ({
      id,
      name,
      topic,
      receivedAt,
    }));
  },
);
