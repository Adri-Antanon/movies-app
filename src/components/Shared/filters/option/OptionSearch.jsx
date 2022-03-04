import React from 'react';
import PropTypes from 'prop-types';

import classes from './optionSearch.module.scss';

const OptionSearch = ({ releaseYear }) => {
  return (
    <option className={classes.option} value={releaseYear}>
      {releaseYear}
    </option>
  );
};

export default OptionSearch;

OptionSearch.propTypes = {
  releaseYear: PropTypes.number.isRequired,
};
