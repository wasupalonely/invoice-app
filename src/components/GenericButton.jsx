import PropTypes from "prop-types";

const GenericButton = ({ onClick, title, bgColor }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`bg-${bgColor}-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-${bgColor}-600 transition duration-300`}
      >
        {title}
      </button>
    </>
  );
};

GenericButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default GenericButton;
