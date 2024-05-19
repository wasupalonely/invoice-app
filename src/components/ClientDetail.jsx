import PropTypes from "prop-types";

const ClientDetail = ({ client }) => {
  const {
    name,
    lastName,
    address: { country, city, state, street, number },
  } = client;

  return (
    <>
      <h3 className="text-2xl font-semibold mb-4">Datos del cliente</h3>
      <ul className="space-y-2">
        <li className="text-lg p-2 bg-gray-100 rounded-md">
          <strong>
            {name} {lastName}
          </strong>
        </li>
        <li className="text-lg border-t border-gray-200 pt-2">{country}</li>
        <li className="text-lg border-t border-gray-200 pt-2">{city}</li>
        <li className="text-lg border-t border-gray-200 pt-2">{state}</li>
        <li className="text-lg border-t border-gray-200 pt-2">{street}</li>
        <li className="text-lg border-t border-gray-200 pt-2">{number}</li>
      </ul>
    </>
  );
};

ClientDetail.propTypes = {
  client: PropTypes.object.isRequired,
};

export default ClientDetail;
