import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, children }) => {
  return (
    <button className={className} onClick={onClick}>

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