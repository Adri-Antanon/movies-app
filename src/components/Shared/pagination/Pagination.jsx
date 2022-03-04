import React, { useState } from 'react';
import { ChevronLeft24 } from '@carbon/icons-react';
import { ChevronRight24 } from '@carbon/icons-react';
import PropTypes from 'prop-types';

import List from '../list/List';

import classes from './pagination.module.scss';

const Pagination = ({ films, title, pageLimit, filmsLimit }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((previousPage) => previousPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage <= 1) return;

    setCurrentPage((previousPage) => previousPage - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * filmsLimit - filmsLimit;
    const endIndex = startIndex + filmsLimit;
    return films.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  const isPreviousDisabled = currentPage <= 1;
  const isNextDisabled = currentPage > Math.floor(films.length / filmsLimit);

  return (
    <>
      <List title={title} films={getPaginatedData(films)} />
      <div className={classes.pagination}>
        <button
          onClick={goToPreviousPage}
          className={classes.previousPage}
          disabled={isPreviousDisabled}
        >
          <ChevronLeft24 title="previous-page" />
        </button>
        {getPaginationGroup().map((item, index) =>
          item - 1 <= Math.floor(films.length / filmsLimit) ? (
            <button
              key={`${index}-${item}`}
              onClick={changePage}
              className={`${classes.page} ${
                currentPage === item ? classes.pageActive : null
              }`}
            >
              <span>{item}</span>
            </button>
          ) : null,
        )}
        <button
          onClick={goToNextPage}
          disabled={isNextDisabled}
          className={classes.nextPage}
        >
          <ChevronRight24 title="next-page" />
        </button>
      </div>
    </>
  );
};

export default Pagination;

Pagination.propTypes = {
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
  pageLimit: PropTypes.number.isRequired,
  filmsLimit: PropTypes.number.isRequired,
};
