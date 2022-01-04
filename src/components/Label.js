import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className='block text-lg font-medium text-dark-cyan-blue'
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.string,
  htmlFor: PropTypes.string,
};
export default Label;
