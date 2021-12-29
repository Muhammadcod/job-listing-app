import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Navbar = () => {
  return (
    <div className='hidden sm:block sm:ml-6'>
      <div className='flex space-x-4'>
        <a
          href='#'
          className='text-white px-3 py-2 text-sm font-medium'
          aria-current='page'
        >
          Jobs
        </a>

        <a
          href='#'
          className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        >
          Company Review
        </a>

        <a
          href='#'
          className='bg-white rounded-md text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        >
          Find Salaries
        </a>

        <Link
          to='/admin'
          className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        >
          Post Job
        </Link>
      </div>
    </div>
  );
};

// Navbar.propTypes = {};

export default Navbar;
