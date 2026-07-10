import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MarketingHeader } from "./marketing-header";

describe("MarketingHeader", () => {
  it("links the logo back to the homepage", () => {
    render(<MarketingHeader />);
    expect(screen.getByRole("link", { name: "Flowlaps" })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("links the CTA to the waitlist section", () => {
    render(<MarketingHeader />);
    expect(
      screen.getByRole("link", { name: "Join the waitlist" }),
    ).toHaveAttribute("href", "#waitlist");
  });
});
