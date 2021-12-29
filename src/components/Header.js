import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import ProfileBar from './ProfileBar';

const Header = ({ showLandingDetails }) => {
  return (
    <div className='bg-dark-cyan-blue h-60 mb-32'>
      <nav className=''>
        <div className='max-w-7xl mx-auto'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex-shrink-0 flex items-center'>
                <img
                  className='block lg:hidden h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                  alt='Workflow'
                />
                <img
                  className='hidden lg:block h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                  alt='Workflow'
                />
              </div>
            </div>

            {showLandingDetails ? <Navbar /> : <ProfileBar />}
          </div>
        </div>
      </nav>
      <div className='container mx-auto mt-20'>
        <h1 className={`text-3xl text-white ${showLandingDetails && 'pl-10'}`}>
          {showLandingDetails ? 'Find Your Dream Job' : 'Jobs'}
        </h1>
      </div>
    </div>
  );
};

export default Header;
Header.propTypes = {
  showLandingDetails: PropTypes.bool,
};
