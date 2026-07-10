import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { WaitlistForm } from "./waitlist-form";

describe("WaitlistForm", () => {
  it("shows a validation error for an invalid email and does not submit", () => {
    render(<WaitlistForm />);

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "not-an-email" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Join the waitlist" }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Enter a valid email address.",
    );
  });

  it("clears the error once the user edits the email again", () => {
    render(<WaitlistForm />);

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "not-an-email" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Join the waitlist" }));
    expect(screen.getByRole("alert")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "driver@example.com" },
    });

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("submits a valid email and shows a confirmation", async () => {
    vi.useFakeTimers();

    render(<WaitlistForm />);

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "driver@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Join the waitlist" }));

    expect(screen.getByRole("button", { name: "Joining…" })).toBeDisabled();

    await act(async () => {
      await vi.advanceTimersByTimeAsync(600);
    });

    expect(screen.getByRole("status")).toHaveTextContent(
      "You're on the list.",
    );

    vi.useRealTimers();
  });
});
