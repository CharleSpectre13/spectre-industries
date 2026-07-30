import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/server/contact";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Enter a valid email"),
  topic: z.enum(
    [
      "consulting",
      "agents",
      "got-you-paid",
      "gaming",
      "infra",
      "partnership",
      "other",
    ],
    { message: "Select a topic" },
  ),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<{
    type: "ok" | "err";
    text: string;
  } | null>(null);
  const [pending, setPending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: undefined,
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setPending(true);
    setStatus(null);
    try {
      const res = await submit({ data: values });
      setStatus({ type: "ok", text: res.message });
      reset();
    } catch {
      setStatus({
        type: "err",
        text: "Could not send. Check fields and try again.",
      });
    } finally {
      setPending(false);
    }
  });

  return (
    <section
      id="contact"
      className="mx-auto max-w-[70rem] px-5 py-20 md:py-28"
      aria-labelledby="contact-title"
    >
      <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
        <div>
          <p className="mb-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-accent">
            Contact
          </p>
          <h2
            id="contact-title"
            className="font-display text-[clamp(2rem,4.5vw,3rem)] font-medium leading-tight text-fg"
          >
            Don’t send a novel. Send the problem.
          </h2>
          <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-muted">
            What you run, where you’re stuck — Floor Map, S007 seat, or Got You
            Paid. Serious notes route to the operator.
          </p>
          <p className="mt-6 text-sm text-muted">
            Prefer social?{" "}
            <a
              href="https://x.com/CharleSpectre"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-accent/35 text-accent transition-colors hover:border-accent"
            >
              @CharleSpectre
            </a>
          </p>
        </div>

        <form
          id="contact-form"
          onSubmit={onSubmit}
          noValidate
          className="grid gap-4 border border-border bg-surface p-6"
        >
          <Field label="Name" error={errors.name?.message}>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              className={fieldClass}
              {...register("name")}
            />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className={fieldClass}
              {...register("email")}
            />
          </Field>
          <Field label="Topic" error={errors.topic?.message}>
            <select id="topic" className={fieldClass} {...register("topic")}>
              <option value="" disabled>
                Select one
              </option>
              <option value="consulting">Floor Map / Operator Sprint</option>
              <option value="agents">S007 Agents ($4/mo)</option>
              <option value="got-you-paid">Got You Paid / Spectre Pay</option>
              <option value="gaming">Interactive gaming</option>
              <option value="infra">Full stack / infra</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <textarea
              id="message"
              rows={5}
              placeholder="What’s broken. What’s next."
              className={cn(fieldClass, "min-h-[7rem] resize-y")}
              {...register("message")}
            />
          </Field>
          <Button type="submit" size="block" disabled={pending}>
            {pending ? "Sending…" : "Send it"}
          </Button>
          {status ? (
            <p
              id="form-status"
              role="status"
              aria-live="polite"
              data-status={status.type}
              className={cn(
                "text-sm",
                status.type === "ok" ? "text-accent" : "text-red-300",
              )}
            >
              {status.text}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

const fieldClass =
  "w-full border border-border-strong bg-bg px-3.5 py-3 text-sm text-fg outline-none transition-colors focus:border-accent/55 placeholder:text-subtle";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label className="text-[0.6875rem] uppercase tracking-[0.1em] text-subtle">
        {label}
      </label>
      {children}
      {error ? <p className="text-xs text-red-300">{error}</p> : null}
    </div>
  );
}
