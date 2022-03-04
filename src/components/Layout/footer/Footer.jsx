import React from 'react';

import Logo from '../shared/logo/Logo';

import classes from './footer.module.scss';
// import AppStore from './assets/app-store.png';
// import GooglePlay from './assets/google-play.png';
import FooterLinks from './components/links/Links';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Logo className={classes.footer__logo} />
      <FooterLinks />
      <div className={classes.footer__download}>
        <img src={'assets/app-store.png'} alt="App Store logo" />
        <img src={'assets/google-play.png'} alt="Google Play logo" />
      </div>
      <p>Copyright 2020 Dreadfull Tomato Streaming All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
