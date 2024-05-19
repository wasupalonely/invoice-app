import PropTypes from "prop-types";
import GenericButton from "./GenericButton";

const ItemRowView = ({ id, product, price, quantity, handleDeleteItem }) => {
  return (
    <>
      <tr className="border-b border-gray-200">
        <td className="py-2 px-4">{product}</td>
        <td className="py-2 px-4">{`$${price}`}</td>
        <td className="py-2 px-4">{quantity}</td>
        <td className="py-2 px-4">
          <GenericButton
            bgColor="red"
            onClick={() => handleDeleteItem(id)}
            title="Eliminar"
          />
        </td>
      </tr>
    </>
  );
};

ItemRowView.propTypes = {
  id: PropTypes.number.isRequired,
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
};

export default ItemRowView;
