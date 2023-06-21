import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, text }) => {
  return (
    <button className={className} onClick={onClick}>
{text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;