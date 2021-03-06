import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const ModalBody = ({ children, size = 'md', toggle }) => {
  return (
    <>
      <div
        className={`inline-block align-bottom bg-white relative rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full`}
      >
        <span className='absolute right-7 top-5' onClick={toggle}>
          X
        </span>
        {children}
      </div>
    </>
  );
};

ModalBody.propTypes = {
  children: PropTypes.object,
  size: PropTypes.string,
  toggle: PropTypes.func,
};

export default ModalBody;
