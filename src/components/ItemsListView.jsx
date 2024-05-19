import ItemRowView from "./ItemRowView";
import PropTypes from "prop-types";

const ItemsListView = ({ items, handleDeleteItem }) => {
  return (
    <>
      <h4 className="text-xl font-semibold mb-2">Productos de la factura</h4>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            <th className="py-2 px-4 text-left">Producto</th>
            <th className="py-2 px-4 text-left">Precio</th>
            <th className="py-2 px-4 text-left">Cantidad</th>
            <th className="py-2 px-4 text-left">Acción</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => (
            <ItemRowView
              key={id}
              id={id}
              product={product}
              price={price}
              quantity={quantity}
              handleDeleteItem={handleDeleteItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

ItemsListView.propTypes = {
  items: PropTypes.array.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
};

export default ItemsListView;
