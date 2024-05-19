import PropTypes from 'prop-types';

const InvoiceDetail = ({ id, name }) => {
  return (
    <>
      <ul className="mb-6 space-y-2">
        <li className="text-lg">
          <strong>Id:</strong> {id}
        </li>
        <li className="text-lg">
          <strong>Name:</strong> {name}
        </li>
      </ul>
    </>
  );
};

InvoiceDetail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default InvoiceDetail;
