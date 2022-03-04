import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './filters.module.scss';
import { FROM_YEAR, TO_YEAR } from './constants';
import OptionSearch from './option/OptionSearch';

const Filters = ({
  titleRef,
  yearRef,
  handleSearchByTitle,
  handleSearchByYear,
}) => {
  const [yearsOptions, setYearsOptions] = useState([]);
  let { pathname } = useLocation();

  const handleSearchTitleChange = useCallback(
    () => handleSearchByTitle(titleRef.current.value),
    [handleSearchByTitle, titleRef],
  );

  const handleYearChange = useCallback(
    () => handleSearchByYear(Number(yearRef.current.value)),
    [handleSearchByYear, yearRef],
  );

  useEffect(() => {
    const amountOfYears = [];

    for (let releaseYear = FROM_YEAR; releaseYear <= TO_YEAR; releaseYear++) {
      amountOfYears.push(releaseYear);
    }

    setYearsOptions(amountOfYears);
  }, []);

  return (
    <div className={classes.filters}>
      <div className={classes.filters__container}>
        <section className={classes.search}>
          <input
            ref={titleRef}
            onChange={handleSearchTitleChange}
            type="text"
            placeholder={`Search by title: ${
              pathname === '/movies' ? 'Mad Max: Fury Road' : 'Breaking Bad'
            }`}
          />
        </section>
        <select onChange={handleYearChange} ref={yearRef}>
          <option value="">Select Year</option>
          {yearsOptions &&
            yearsOptions.map((year) => (
              <OptionSearch key={year} releaseYear={year} />
            ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;

Filters.propTypes = {
  titleRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  yearRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  handleSearchByTitle: PropTypes.func.isRequired,
  handleSearchByYear: PropTypes.func.isRequired,
};
