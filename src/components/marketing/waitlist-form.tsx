"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      setErrorMessage("Enter a valid email address.");
      return;
    }

    setStatus("loading");

    // Mock submit: no waitlist backend yet, this just simulates the request.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-border bg-card p-6 text-center"
      >
        <p className="font-medium">You&apos;re on the list.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We&apos;ll email you when Flowlaps is ready to try.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-3 sm:flex-row sm:items-start"
    >
      <div className="flex-1">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <Input
          id="waitlist-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") {
              setStatus("idle");
            }
          }}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? "waitlist-email-error" : undefined}
          className="h-10"
        />
        {status === "error" ? (
          <p
            id="waitlist-email-error"
            role="alert"
            className="mt-2 text-sm text-destructive"
          >
            {errorMessage}
          </p>
        ) : null}
      </div>
      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Joining…" : "Join the waitlist"}
      </Button>
    </form>
  );
}
