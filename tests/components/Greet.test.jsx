import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("it should render hello world", () => {
    render(<Greet />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Click Me" })
    ).toBeInTheDocument();
    screen.debug();
  });
});
