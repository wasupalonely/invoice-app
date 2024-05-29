import { useState, useEffect } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import ClientDetail from "./components/ClientDetail";
import CompanyView from "./components/CompanyView";
import InvoiceDetail from "./components/InvoiceDetail";
import ItemsListView from "./components/ItemsListView";
import TotalView from "./components/TotalView";
import ItemsFormModal from "./components/ItemsFormModal";
import GenericButton from "./components/GenericButton";
import { fetchApiData } from "./api/apiCall";

const initialInvoice = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      state: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
};

export const InvoiceApp = () => {
  const [counter, setCounter] = useState(4);
  const [modalVisible, setModalVisible] = useState(false);

  const [total, setTotal] = useState(0);

  const [invoice, setInvoice] = useState(initialInvoice);

  const { id, name, company, client } = invoice;
  const [items, setItems] = useState([]);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchApiData();
        console.log("REsult --> ", result);
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const data = getInvoice();
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  const handleAddInvoiceItems = ({
    productValue,
    priceValue,
    quantityValue,
  }) => {
    setItems([
      ...items,
      {
        id: counter,
        product: productValue,
        price: +priceValue,
        quantity: +quantityValue,
      },
    ]);

    setCounter(counter + 1);
    setModalVisible(false);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(i => i.id !== id));
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Factura</h1>

      <InvoiceDetail id={id} name={name} />

      <div className="flex mb-6 space-x-6">
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
          <ClientDetail client={client} />
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 w-full">
          <CompanyView company={company} />
        </div>
      </div>

      <ItemsListView items={items} handleDeleteItem={handleDeleteItem} />
      <TotalView total={total} />

      <GenericButton
        onClick={() => setModalVisible(true)}
        title="Agregar producto"
        bgColor="blue"
      />

      {modalVisible && (
        <ItemsFormModal
          handleAddInvoiceItems={handleAddInvoiceItems}
          onClose={() => setModalVisible(false)}
        />
      )}
    </div>
  );
};
