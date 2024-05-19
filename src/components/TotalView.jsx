import PropTypes from "prop-types";

const TotalView = ({ total }) => {
  return (
    <div className="flex justify-end">
      <span className="bg-green-500 text-white font-bold px-4 py-2 rounded">
        {`$${total}`}
      </span>
    </div>
  );
};

TotalView.propTypes = {
  total: PropTypes.number.isRequired,
};

export default TotalView;
