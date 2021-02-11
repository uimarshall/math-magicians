import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div>
      <p>{result}</p>
    </div>
  );
}

Display.prototype = {
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
