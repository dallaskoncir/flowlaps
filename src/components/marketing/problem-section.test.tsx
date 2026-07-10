import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProblemSection } from "./problem-section";

describe("ProblemSection", () => {
  it("names the problem with existing coaching tools", () => {
    render(<ProblemSection />);
    expect(
      screen.getByText("Most coaching tools weren't built for after the session."),
    ).toBeInTheDocument();
  });

  it("lists exactly three pain points", () => {
    render(<ProblemSection />);
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
  });
});
