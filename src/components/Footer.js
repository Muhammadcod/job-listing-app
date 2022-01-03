import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as LogoTwo } from '../assets/Logo2.svg';
import { ReactComponent as Insta } from '../assets/insta.svg';
import { ReactComponent as Meta } from '../assets/meta.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';

// eslint-disable-next-line no-unused-vars
const Footer = ({ showLandingDetails }) => {
  return (
    <div className='bg-dark-cyan-blue mt-40'>
      <footer className='container mx-auto py-8 font-poppins'>
        <div className='grid grid-cols-4 gap-4 text-white'>
          {showLandingDetails ? (
            <div className='col-span-6 md:col-span-1'>
              <LogoTwo />© 2021 <span className=''>FindJobs</span>
            </div>
          ) : (
            <div className='flex items-center col-span-6 md:col-span-1'>
              <LogoTwo />
            </div>
          )}
          {showLandingDetails ? (
            <div className='col-span-6 md:col-span-2 flex justify-center space-x-10'>
              <div>
                <p className='text-xl mb-5'>Quick Links</p>
                <ul>
                  <li className='text-lg font-light'>Home</li>
                  <li className='text-lg font-light'>About</li>
                  <li className='text-lg font-light'>Calendar</li>
                  <li className='text-lg font-light'>Terms and condition</li>
                </ul>
              </div>
              <div>
                <p className='text-xl mb-5'>Quick Links</p>
                <ul>
                  <li className='text-lg font-light'>Home</li>
                  <li className='text-lg font-light'>About</li>
                  <li className='text-lg font-light'>Calendar</li>
                  <li className='text-lg font-light'>Terms and condition</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className='col-span-2 flex items-center text-lg font-light'>
              <div className='mr-6'>
                © 2021 <span className=''>FindJobs</span>
              </div>
              Terms and condition
            </div>
          )}
          <div className='col-span-6 md:col-span-1'>
            {showLandingDetails && (
              <div className='flex justify-center mb-4'>
                <h3 className='text-2xl'>Social Media</h3>
              </div>
            )}

            <div className='flex space-x-8 justify-center'>
              <div className='w-16 h-16 rounded-full bg-sky-800 flex items-center justify-center'>
                <Insta />
              </div>
              <div className='w-16 h-16 rounded-full bg-sky-800 flex items-center justify-center'>
                <Meta />
              </div>
              <div className='w-16 h-16 rounded-full bg-sky-800 flex items-center justify-center'>
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {
  showLandingDetails: PropTypes.bool,
};

export default Footer;
