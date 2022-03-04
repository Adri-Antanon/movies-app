import React from 'react';
import PropTypes from 'prop-types';
import { WarningAlt32 } from '@carbon/icons-react';

import classes from './list.module.scss';
import ListItem from './listItem/ListItem';

const List = ({ title, films }) => {
  if (films.length === 0) {
    return (
      <section className={classes.container}>
        <h3>
          <WarningAlt32 /> No results found, you can try to change the filters{' '}
          <WarningAlt32 />
        </h3>
      </section>
    );
  }
  return (
    <section className={classes.container}>
      <h2>{title}</h2>
      <ul className={classes.list}>
        {films &&
          films.map((film) => (
            <ListItem
              key={film.title}
              title={film.title}
              description={film.description}
              url={film.images['Poster Art'].url}
              releaseYear={film.releaseYear}
            />
          ))}
      </ul>
    </section>
  );
};

export default List;

List.propTypes = {
  title: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.shape({
        'Poster Art': PropTypes.shape({
          url: PropTypes.string.isRequired,
          width: PropTypes.number.isRequired,
          height: PropTypes.number.isRequired,
        }),
      }),
      releaseYear: PropTypes.number.isRequired,
    }),
  ),
};
