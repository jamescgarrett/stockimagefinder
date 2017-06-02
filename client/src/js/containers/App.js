import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { post } from '../actions/actions.search';
import { queryChange, styleChange, orientationChange, sourcesChange } from '../actions/actions.ui';
import { SearchForm, SearchResults } from '../components';

class App extends Component {

  static propTypes = {
    results: PropTypes.object,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    style: PropTypes.string,
    query: PropTypes.string,
    orientation: PropTypes.string,
    sources: PropTypes.array,
    dispatch: PropTypes.func,
  }

  _handleFormSubmit(data) {
    this.props.dispatch(post(data));
  }

  _handleQueryChange(value) {
    this.props.dispatch(queryChange(value));
  }

  _handleStyleChange(value) {
    this.props.dispatch(styleChange(value));
  }

  _handleOrientationChange(value) {
    this.props.dispatch(orientationChange(value));
  }

  _handleSourcesChange(values) {
    this.props.dispatch(sourcesChange(values));
  }

  render() {
    const {
      results,
      isLoading,
      error,
      query,
      style,
      orientation,
      sources,
    } = this.props;
    return (
      <section className='section'>
        <div className='container'>
          <div className='heading'>
            <h2 className='title'>Search:</h2>
            <p>Search for images using a keyword.</p>
          </div>
          <div className='columns'>
            <div className='column is-one-quarter'>
              <p>{error ? error : ''}</p>
              <SearchForm
                onFormSubmit={data => this._handleFormSubmit(data)}
                onQueryChange={value => this._handleQueryChange(value)}
                onStyleChange={value => this._handleStyleChange(value)}
                onOrientationChange={value => this._handleOrientationChange(value)}
                onSourcesChange={values => this._handleSourcesChange(values)}
                query={query}
                style={style}
                orientation={orientation}
                sources={sources}
              />
            </div>
            {isLoading &&
              <div className='column'>
                <h2>Loading...</h2>
              </div>
            }
            {!isLoading && results !== null && Object.keys(results).length === 0 &&
              <div className='column'>
                <h2>No Results...</h2>
              </div>
            }

            {results !== null && Object.keys(results).length > 0 &&
              <SearchResults error={error} results={results} />
            }
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  results: state.search.results,
  isLoading: state.search.isLoading,
  error: state.search.error,
  query: state.ui.query,
  style: state.ui.style,
  orientation: state.ui.orientation,
  sources: state.ui.sources,
});

export default connect(mapStateToProps)(App);
