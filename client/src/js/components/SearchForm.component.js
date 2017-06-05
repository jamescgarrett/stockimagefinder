import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleQueryChange = this._handleQueryChange.bind(this);
  }

  _handleQueryChange(e) {
    this.props.onQueryChange(e.target.value);
  }

  _handleSubmit(e) {
    e.preventDefault();
    const data = JSON.stringify({
      query: this.props.query,
      style: this.props.style,
      orientation: this.props.orientation,
      sources: this.props.sources,
    });
    this.props.onFormSubmit(data);
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className='field'>
          <p className='control'>
            <label htmlFor='query' className='label'>Search:</label>
            <input className='input' type='text' onChange={this._handleQueryChange} placeholder='Search Term...' />
          </p>
        </div>
        <div className='field'>
          <p className='control'>
            <button type='submit' className='button is-primary'>Search</button>
          </p>
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  sources: PropTypes.array.isRequired,
};
