import React, { PropTypes } from 'react';

export default function Button({ clickHandler, children }) {
  return (
    <button onClick={clickHandler}>{children}</button>
  );
}

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired
};
