import React from 'react';

import classes from './links.module.scss';
import { FOOTER_LINKS } from '../../constants';

const Links = () => {
  return (
    <ul className={classes.links}>
      {FOOTER_LINKS.map((link) => (
        <li key={link.name}>{link.name}</li>
      ))}
    </ul>
  );
};

export default Links;
