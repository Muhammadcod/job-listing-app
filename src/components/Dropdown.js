import React, { useState } from 'react';

const Dropdown = () => {
  const [state, setState] = useState({
    viewMore: false,
  });
  const { viewMore } = state;

  const toggleView = () => setState({ ...state, viewMore: !viewMore });

  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          type='button'
          className='inline-flex justify-center w-full px-4 py-2 text-xl font-medium text-gray-700 focus:outline-none '
          id='menu-button'
          aria-expanded='true'
          aria-haspopup='true'
          onClick={toggleView}
        >
          Latest
          <svg
            className='-mr-1 ml-2 h-8 w-5 '
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>

      {viewMore && (
        <div
          className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabIndex='-1'
        >
          <div className='py-1' role='none'>
            <a
              href='#'
              className='text-gray-700 block px-4 py-2 text-sm'
              role='menuitem'
              tabIndex='-1'
              id='menu-item-0'
            >
              Last 7 days
            </a>
            <a
              href='#'
              className='text-gray-700 block px-4 py-2 text-sm'
              role='menuitem'
              tabIndex='-1'
              id='menu-item-1'
            >
              Last Month
            </a>
            <a
              href='#'
              className='text-gray-700 block px-4 py-2 text-sm'
              role='menuitem'
              tabIndex='-1'
              id='menu-item-2'
            >
              Last Six Months
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
