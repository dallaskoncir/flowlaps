import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MarketingFooter } from "./marketing-footer";

describe("MarketingFooter", () => {
  it("shows the current year in the copyright line", () => {
    render(<MarketingFooter />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("keeps the tagline calm and jargon-free", () => {
    render(<MarketingFooter />);
    expect(
      screen.getByText("Post-session coaching for sim racers."),
    ).toBeInTheDocument();
  });
});
