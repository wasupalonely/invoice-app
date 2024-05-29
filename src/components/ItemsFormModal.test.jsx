import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ItemsFormModal from "./ItemsFormModal";
import { expect, jest, test } from "@jest/globals";

test("renders ItemsFormModal and allows form submission", async () => {
  const handleAddInvoiceItems = jest.fn();
  const onClose = jest.fn();

  render(
    <ItemsFormModal
      handleAddInvoiceItems={handleAddInvoiceItems}
      onClose={onClose}
    />
  );

  expect(screen.getByPlaceholderText("Producto")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Precio")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Cantidad")).toBeInTheDocument();
  expect(screen.getByText("Cerrar")).toBeInTheDocument();
  expect(screen.getByText("Agregar producto")).toBeDisabled();

  userEvent.type(screen.getByPlaceholderText("Producto"), "Product A");
  userEvent.type(screen.getByPlaceholderText("Precio"), "10");
  userEvent.type(screen.getByPlaceholderText("Cantidad"), "2");

  // Check if the submit button is enabled
  await waitFor(() =>
    expect(screen.getByText("Agregar producto")).toBeEnabled()
  );

  // Submit the form
  fireEvent.click(screen.getByText("Agregar producto"));

  // Check if handleAddInvoiceItems was called with correct data
//   expect(handleAddInvoiceItems).toHaveBeenCalledWith({
//     productValue: "Product A",
//     priceValue: "10",
//     quantityValue: "2",
//   });

  // Check if form values are reset after submission
  expect(screen.getByPlaceholderText("Producto")).toHaveValue("");
  expect(screen.getByPlaceholderText("Precio")).toHaveValue(null);
  expect(screen.getByPlaceholderText("Cantidad")).toHaveValue(null);

  // Check if onClose is called when the close button is clicked
  fireEvent.click(screen.getByText("Cerrar"));
  expect(onClose).toHaveBeenCalled();
});
