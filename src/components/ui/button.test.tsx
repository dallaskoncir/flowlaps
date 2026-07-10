import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders its label as a button", () => {
    render(<Button>Join the waitlist</Button>);
    expect(
      screen.getByRole("button", { name: "Join the waitlist" }),
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Save</Button>);
    fireEvent.click(screen.getByRole("button", { name: "Save" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not fire onClick while disabled", () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled>
        Save
      </Button>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Save" }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders through the render prop as the underlying element instead of a button", () => {
    render(<Button render={<a href="#waitlist">Join the waitlist</a>} />);
    const link = screen.getByRole("link", { name: "Join the waitlist" });
    expect(link).toHaveAttribute("href", "#waitlist");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
