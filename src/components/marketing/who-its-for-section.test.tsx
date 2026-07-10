import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { WhoItsForSection } from "./who-its-for-section";

describe("WhoItsForSection", () => {
  it("names who the product is for", () => {
    render(<WhoItsForSection />);
    expect(
      screen.getByText("For drivers who just want to get better."),
    ).toBeInTheDocument();
  });

  it("lists the audience as a set of list items", () => {
    render(<WhoItsForSection />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
