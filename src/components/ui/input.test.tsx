import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./input";

describe("Input", () => {
  it("renders with a placeholder", () => {
    render(<Input placeholder="you@example.com" />);
    expect(screen.getByPlaceholderText("you@example.com")).toBeInTheDocument();
  });

  it("forwards the type attribute", () => {
    render(<Input type="email" placeholder="you@example.com" />);
    expect(screen.getByPlaceholderText("you@example.com")).toHaveAttribute(
      "type",
      "email",
    );
  });

  it("calls onChange as a controlled input", () => {
    const onChange = vi.fn();
    render(<Input value="" onChange={onChange} placeholder="you@example.com" />);
    fireEvent.change(screen.getByPlaceholderText("you@example.com"), {
      target: { value: "driver@example.com" },
    });
    expect(onChange).toHaveBeenCalled();
  });

  it("respects the disabled state", () => {
    render(<Input disabled placeholder="you@example.com" />);
    expect(screen.getByPlaceholderText("you@example.com")).toBeDisabled();
  });
});
