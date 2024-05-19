import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ItemsFormModal = ({ handleAddInvoiceItems, onClose }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [invoiceItems, setInvoiceItems] = useState({
    productValue: "",
    priceValue: "",
    quantityValue: "",
  });

  const { productValue, priceValue, quantityValue } = invoiceItems;

  useEffect(() => {
    if (productValue !== "" && priceValue !== "" && quantityValue !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [productValue, priceValue, quantityValue]);

  const onFormFieldChange = ({ target: { name, value } }) => {
    setInvoiceItems({
      ...invoiceItems,
      [name]: value,
    });
  };

  const resetFormValues = () => {
    setInvoiceItems({
      productValue: "",
      priceValue: "",
      quantityValue: "",
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (
      productValue.trim().length <= 1 ||
      priceValue.trim().length <= 1 ||
      quantityValue.trim().length < 1
    )
      return;

    handleAddInvoiceItems(invoiceItems);

    resetFormValues();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 absolute top-4 right-4"
        >
          Cerrar
        </button>

        <form className="space-y-4 mt-10" onSubmit={onFormSubmit}>
          <input
            value={productValue}
            onChange={onFormFieldChange}
            type="text"
            name="productValue"
            placeholder="Producto"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={priceValue}
            onChange={onFormFieldChange}
            type="number"
            name="priceValue"
            placeholder="Precio"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={quantityValue}
            onChange={onFormFieldChange}
            type="number"
            name="quantityValue"
            placeholder="Cantidad"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            disabled={buttonDisabled}
            type="submit"
            className={`w-full font-bold py-4 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
              buttonDisabled
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Agregar producto
          </button>
        </form>
      </div>
    </div>
  );
};

ItemsFormModal.propTypes = {
  handleAddInvoiceItems: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ItemsFormModal;
