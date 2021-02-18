import PropTypes from 'prop-types';

function Button({
  name, clickHandler, wide, color,
}) {
  const handleClick = buttonName => {
    clickHandler(buttonName);
  };
  return (
    <div className={wide ? 'wide' : 'btn'}>
      <button data-testid="button" type="button" className={color ? 'color' : null} onClick={() => handleClick(name)}>{name}</button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.bool,

};

Button.defaultProps = {
  wide: false,
  color: false,
};

export default Button;
