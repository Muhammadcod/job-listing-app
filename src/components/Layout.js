import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

import Footer from './Footer';

const Layout = ({ children, showLandingDetails }) => {
  return (
    <div className='bg-base-color min-h-screen relative flex flex-col'>
      <Header showLandingDetails={showLandingDetails} />
      <div>{children}</div>
      <Footer showLandingDetails={showLandingDetails} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
  showLandingDetails: PropTypes.bool,
};

export default Layout;
