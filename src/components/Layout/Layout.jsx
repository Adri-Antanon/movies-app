import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer/Footer';
import Header from './header/Header';

import classes from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
