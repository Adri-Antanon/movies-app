import React from 'react';

import BillboardItem from './section/Section';

import classes from './billboard.module.scss';

const Billboard = () => {
  return (
    <div className={classes.billboard}>
      <BillboardItem
        src={'assets/movies.png'}
        title={'Movies'}
        href={'/movies'}
      />
      <BillboardItem
        src={'assets/series.png'}
        title={'Series'}
        href={'/series'}
      />
    </div>
  );
};

export default Billboard;
