import PropTypes from 'prop-types';

function Button({ name, clickHandler }) {
  const handleClick = buttonName => {
    clickHandler(buttonName);
  };
  return (
    <>
      <button type="button" onClick={() => handleClick(name)}>{name}</button>
    </>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,

};

export default Button;
