import React from 'react';
import PropTypes from 'prop-types';
import ModalBody from './ModalBody';

const Modal = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { toggle, isOpen, size, component: Component, entity } = props;
  return (
    <>
      {isOpen && (
        <div
          className='fixed z-10 inset-0 overflow-y-auto'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div
              className='fixed inset-0 transition-opacity'
              aria-hidden='true'
            />

            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>

            <ModalBody size={size} toggle={toggle}>
              {Component && <Component entity={entity} />}
            </ModalBody>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  toggle: PropTypes.func,
  component: PropTypes.func,
  isOpen: PropTypes.bool,
  size: PropTypes.string,
  entity: PropTypes.object,
};

export default Modal;
