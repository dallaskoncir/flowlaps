import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders its content", () => {
    render(<Badge>Practice</Badge>);
    expect(screen.getByText("Practice")).toBeInTheDocument();
  });

  it("exposes a data-slot for styling hooks", () => {
    render(<Badge>Practice</Badge>);
    expect(screen.getByText("Practice")).toHaveAttribute("data-slot", "badge");
  });

  it("applies the requested variant's classes", () => {
    render(<Badge variant="outline">Outline</Badge>);
    expect(screen.getByText("Outline")).toHaveClass("border-border");
  });
});
