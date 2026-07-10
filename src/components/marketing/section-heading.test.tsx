import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeading } from "./section-heading";

describe("SectionHeading", () => {
  it("renders the title as a heading", () => {
    render(<SectionHeading title="How it works" />);
    expect(
      screen.getByRole("heading", { name: "How it works" }),
    ).toBeInTheDocument();
  });

  it("omits the eyebrow and description when not provided", () => {
    render(<SectionHeading title="How it works" />);
    expect(screen.queryByText(/./, { selector: "span" })).not.toBeInTheDocument();
  });

  it("renders the eyebrow and description when provided", () => {
    render(
      <SectionHeading
        eyebrow="Get early access"
        title="Be first in"
        description="No spam, just a note when it's ready."
      />,
    );
    expect(screen.getByText("Get early access")).toBeInTheDocument();
    expect(
      screen.getByText("No spam, just a note when it's ready."),
    ).toBeInTheDocument();
  });

  it("centers content when align is 'center'", () => {
    render(<SectionHeading title="Be first in" align="center" />);
    expect(screen.getByRole("heading", { name: "Be first in" }).parentElement).toHaveClass(
      "items-center",
    );
  });
});
