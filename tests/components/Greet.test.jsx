import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("it should render hello world", () => {
    render(<Greet />);
    screen.debug();
  });
});
