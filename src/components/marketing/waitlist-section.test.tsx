import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { WaitlistSection } from "./waitlist-section";

describe("WaitlistSection", () => {
  it("exposes the #waitlist anchor target", () => {
    const { container } = render(<WaitlistSection />);
    expect(container.querySelector("#waitlist")).not.toBeNull();
  });

  it("renders the waitlist form's email input and submit button", () => {
    render(<WaitlistSection />);
    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Join the waitlist" }),
    ).toBeInTheDocument();
  });
});
