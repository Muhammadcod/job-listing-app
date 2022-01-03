import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import ProfileBar from './ProfileBar';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Header = ({ showLandingDetails }) => {
  return (
    <div className='bg-dark-cyan-blue h-60 mb-32 relative '>
      <div className='container mx-auto'>
        <nav className=''>
          <div className='max-w-7xl mx-auto'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <Link to='/' className='flex-shrink-0 flex items-center'>
                  <Logo />
                </Link>
              </div>
              {showLandingDetails ? <Navbar /> : <ProfileBar />}
            </div>
          </div>
        </nav>
        <div className='container mx-auto mt-20'>
          <h1
            className={`text-3xl pl-40 text-white ${
              showLandingDetails ? 'font-poppins' : 'font-montserrat'
            }`}
          >
            {showLandingDetails ? 'Find Your Dream Job' : 'Jobs'}
          </h1>
        </div>

        {showLandingDetails && <SearchBar />}
      </div>
    </div>
  );
};

export default Header;
Header.propTypes = {
  showLandingDetails: PropTypes.bool,
};
