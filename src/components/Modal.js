import React from 'react';
import PropTypes from 'prop-types';
import ModalBody from './ModalBody';

const Modal = (props) => {
  const { toggle, isOpen, size, component: Component } = props;
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
              {Component && <Component />}
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
};

export default Modal;

/*
<div className='sm:flex sm:items-start'>
  <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
    <svg
        className='h-6 w-6 text-red-600'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
    >
      <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
      />
    </svg>
  </div>
  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
    <h3
        className='text-lg leading-6 font-medium text-gray-900'
        id='modal-title'
    >
      Deactivate account
    </h3>
    <div className='mt-2'>
      <p className='text-sm text-gray-500'>
        Are you sure you want to deactivate your account? All of
        your data will be permanently removed. This action
        cannot be undone.
      </p>
    </div>
  </div>
</div>*/
