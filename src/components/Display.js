import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div className="display">
      <p>{result}</p>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
