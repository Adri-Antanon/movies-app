import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Logo = ({ className }) => {
  return (
    <Link href={'/'} passHref>
      <img
        className={className}
        src={'assets/logo.png'}
        alt="logo Dreadful Tomato"
      />
    </Link>
  );
};

export default Logo;

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};
