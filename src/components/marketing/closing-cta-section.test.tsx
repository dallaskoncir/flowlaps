import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ClosingCtaSection } from "./closing-cta-section";

describe("ClosingCtaSection", () => {
  it("closes with a headline and a link back to the waitlist", () => {
    render(<ClosingCtaSection />);
    expect(
      screen.getByRole("heading", {
        name: "Drive. Get one clear thing to work on. Repeat.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Join the waitlist" }),
    ).toHaveAttribute("href", "#waitlist");
  });
});
