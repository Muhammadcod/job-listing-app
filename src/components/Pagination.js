import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
  recordFunc,
  meta = { last_page: 1, buttonLinks: [] },
}) => {
  const [loading, setLoading] = useState(false);

  async function prev() {
    try {
      setLoading(true);
      await recordFunc(meta.buttonLinks.prev);
    } finally {
      setLoading(false);
    }
  }

  async function next() {
    try {
      setLoading(true);
      await recordFunc(meta.buttonLinks.next);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between mt-8'>
      <div>
        {meta.last_page > 1 && (
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'
          >
            <button
              onClick={prev}
              disabled={!meta.buttonLinks?.prev || loading}
              className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Previous</span>
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <a
              href='#'
              aria-current='page'
              className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
            >
              1
            </a>
            <button
              onClick={next}
              disabled={!meta.buttonLinks?.next || loading}
              className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Next</span>
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  meta: PropTypes.object,
  recordFunc: PropTypes.func.isRequired,
};

export default Pagination;
