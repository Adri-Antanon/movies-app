import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import classes from './section.module.scss';

const Section = ({ href, src, title }) => {
  return (
    <Link href={href} passHref>
      <div className={classes.billboard__container}>
        <img src={src} alt={title} />
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default Section;

Section.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
