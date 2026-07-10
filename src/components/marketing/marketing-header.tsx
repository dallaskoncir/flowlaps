import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MarketingHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Flowlaps
        </Link>
        <Button size="sm" render={<Link href="#waitlist">Join the waitlist</Link>} />
      </div>
    </header>
  );
}
