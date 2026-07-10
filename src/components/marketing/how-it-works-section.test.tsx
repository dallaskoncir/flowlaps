import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { HowItWorksSection } from "./how-it-works-section";

describe("HowItWorksSection", () => {
  it("exposes the #how-it-works anchor target", () => {
    const { container } = render(<HowItWorksSection />);
    expect(container.querySelector("#how-it-works")).not.toBeNull();
  });

  it("walks through exactly three steps in order", () => {
    render(<HowItWorksSection />);
    const steps = screen.getAllByRole("heading", { level: 3 }).map((el) => el.textContent);
    expect(steps).toEqual([
      "Import your session",
      "Get a plain-language report",
      "Practice one habit",
    ]);
  });
});
