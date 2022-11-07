import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ children, onClick, disabled = false }) => {
  return (
    <div>
      <button
        className="button"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Button;