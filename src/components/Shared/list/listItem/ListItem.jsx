import React from 'react';
import PropTypes from 'prop-types';

import classes from './listItem.module.scss';

const ListItem = ({ title, releaseYear, description, url }) => {
  return (
    <div
      className={classes.list__item}
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className={classes.content}>
        <h4>{title}</h4>
        {/* {props.element.releaseYear > 0 && (
          <p className={classes.date}>
            <Calendar16 /> {props.element.releaseYear}
          </p>
        )} */}
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ListItem;

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseYear: PropTypes.number,
};
