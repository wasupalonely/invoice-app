import PropTypes from 'prop-types';

const CompanyView = ({ company }) => {

  const { name, fiscalNumber } = company;

  return (
    <>
      <h3 className="text-2xl font-semibold mb-4">Datos de la empresa</h3>
      <ul className="space-y-2">
        <li className="text-lg p-2 bg-gray-100 rounded-md">
          <strong>{name}</strong>
        </li>
        <li className="text-lg border-t border-gray-200 pt-2">
          {fiscalNumber}
        </li>
      </ul>
    </>
  );
};

CompanyView.propTypes = {
  company: PropTypes.object.isRequired
}

export default CompanyView;
