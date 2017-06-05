import React from 'react';
import PropTypes from 'prop-types';

import { SearchResultsImages } from '../components';

const SearchResults = ({ results }) => (
  <div>
    <p>{results.error ? <span className='error'>results.error</span> : ''}</p>
    {results.error === undefined &&
      <SearchResultsImages results={results} />
    }
  </div>
);

SearchResults.propTypes = {
  results: PropTypes.object.isRequired,
};

export default SearchResults;
