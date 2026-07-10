import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DifferentiationSection } from "./differentiation-section";

describe("DifferentiationSection", () => {
  it("states the positioning headline", () => {
    render(<DifferentiationSection />);
    expect(
      screen.getByText("Built to feel like a coach, not a parser."),
    ).toBeInTheDocument();
  });

  it("limits itself to three principles", () => {
    render(<DifferentiationSection />);
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
  });

  it("leads with the calm, post-session, one-habit-at-a-time framing", () => {
    render(<DifferentiationSection />);
    expect(screen.getByText("Calm, not constant")).toBeInTheDocument();
    expect(screen.getByText("Plain language")).toBeInTheDocument();
    expect(screen.getByText("One habit at a time")).toBeInTheDocument();
  });
});
