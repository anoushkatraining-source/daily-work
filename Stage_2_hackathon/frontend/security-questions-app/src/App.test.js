import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import axios from "axios";
jest.mock("axios");
test("renders Security Form title", () => {
  axios.get.mockResolvedValue({ data: [] });
  render(<App />);
  expect(screen.getByText("Security Form")).toBeInTheDocument();
});