import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marketing/section-heading";

export function ClosingCtaSection() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-16 text-center sm:py-20">
        <SectionHeading
          title="Drive. Get one clear thing to work on. Repeat."
          description="That's the whole idea. Join the waitlist to be first in."
          align="center"
        />
        <Button
          size="lg"
          className="mt-2"
          render={<Link href="#waitlist">Join the waitlist</Link>}
        />
      </div>
    </section>
  );
}
