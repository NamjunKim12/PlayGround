import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

it("should not allow user to submit if checkbox is unchecked", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

it("should allow user to submit if checkbox is checked", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });
  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeEnabled();
});
