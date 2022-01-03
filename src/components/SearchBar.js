import React from 'react';
import { ReactComponent as Location } from '../assets/location.svg';

const SearchBar = () => {
  return (
    <div className='flex items-center px-4 py-2 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 absolute right-1/4 -bottom-8'>
      <div className='flex px-2 w-5/12 space-x-4 rounded-lg items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 opacity-30'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
        <input
          placeholder='Frontend Developer'
          className=' outline-none border-none w-full'
          type='text'
        />
      </div>

      <div className='flex px-2 w-5/12 space-x-4 rounded-lg items-center '>
        <Location />
        <input
          placeholder='Lagos, Nigeria'
          className='w-full outline-none border-none'
          type='text'
        />
      </div>

      <div className='bg-bright-red py-3 px-7 text-white font-light rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer'>
        <span>Search</span>
      </div>
    </div>
  );
};

export default SearchBar;
