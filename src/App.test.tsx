import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import App from "./App";

test("Stupid test", () => {
  expect(3).toBe(3);
});

test("App test", () => {
  render(<App />);
  expect(screen.getAllByRole("heading")).toHaveLength(2);
  expect(screen.getByText("Hello CodeSandbox").classList).not.toContain(
    "highlight"
  );
  fireEvent.click(screen.getByText("Highlight !"));
  expect(screen.getByText("Hello CodeSandbox").classList).toContain(
    "highlight"
  );
});
