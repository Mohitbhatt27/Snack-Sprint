import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../pages/Contact";
import Header from "../components/Header";

test("contact should load", () => {
  render(<Contact />);
  const headingElem = screen.getByRole("heading");
  expect(headingElem).toBeInTheDocument();
});

