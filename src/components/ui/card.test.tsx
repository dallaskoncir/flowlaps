import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";

describe("Card", () => {
  it("renders its composed parts with their content", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Fastest lap</CardTitle>
          <CardDescription>Across all sessions</CardDescription>
        </CardHeader>
        <CardContent>1:48.642</CardContent>
        <CardFooter>Updated today</CardFooter>
      </Card>,
    );

    expect(screen.getByText("Fastest lap")).toBeInTheDocument();
    expect(screen.getByText("Across all sessions")).toBeInTheDocument();
    expect(screen.getByText("1:48.642")).toBeInTheDocument();
    expect(screen.getByText("Updated today")).toBeInTheDocument();
  });

  it("exposes data-slot hooks for each part", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardContent>Content</CardContent>
      </Card>,
    );

    expect(screen.getByText("Content").closest('[data-slot="card"]')).not.toBeNull();
    expect(screen.getByText("Title")).toHaveAttribute("data-slot", "card-title");
    expect(screen.getByText("Content")).toHaveAttribute("data-slot", "card-content");
  });
});
