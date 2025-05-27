//write a test to check if the header component renders correctly

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";

test("renders Header", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Askan Energy/i);
  expect(linkElement).toBeInTheDocument();
});
