import PropTypes from 'prop-types';

const Button = ({ onBtnClick }) => (
  <button type="button" className="Button" onClick={onBtnClick}>
    Load more...
  </button>
);

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};

export default Button;
