import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleQueryChange = this._handleQueryChange.bind(this);
    this._handleStyleChange = this._handleStyleChange.bind(this);
    this._handleOrientationChange = this._handleOrientationChange.bind(this);
    this._handleSourcesChange = this._handleSourcesChange.bind(this);
  }

  _handleQueryChange(e) {
    this.props.onQueryChange(e.target.value);
  }

  _handleStyleChange(e) {
    this.props.onStyleChange(e.target.value);
  }

  _handleOrientationChange(e) {
    this.props.onOrientationChange(e.target.value);
  }

  _handleSourcesChange(e) {
    const { sources } = this.props;
    const values = sources;
    const idx = values.indexOf(e.target.value);
    if (idx !== -1 && !e.target.checked) {
      values.splice(idx, 1);
    } else {
      values.push(e.target.value);
    }
    this.props.onSourcesChange(values);
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
        <input type='text' onChange={this._handleQueryChange} placeholder='Search Term...' />
        <div>
          <label htmlFor='style'><b>File Type</b></label><br />
          <input
            type='radio'
            name='style'
            value='illustration'
            onChange={this._handleStyleChange}
          />
            Illustration
          <br />
          <input
            type='radio'
            name='style'
            value='photo'
            onChange={this._handleStyleChange}
          />
            Photo
        </div>
        <br />
        <div>
          <label htmlFor='orientation'><b>Orientation</b></label><br />
          <input
            type='radio'
            name='orientation'
            value='landscape'
            onChange={this._handleOrientationChange}
          />
            Landscape
          <br />
          <input
            type='radio'
            name='orientation'
            value='portrait'
            onChange={this._handleOrientationChange}
          />
            Portrait
        </div>
        <br />
        <div>
          <label htmlFor='source'><b>Sites to Search</b></label>
          <br />
          <input
            type='checkbox'
            name='source'
            value='gettyimages'
            onChange={this._handleSourcesChange}
          />
            Getty Images (includes: iStock, ThinkStock)
          <br />
          <input
            type='checkbox'
            name='source'
            value='shutterstock'
            onChange={this._handleSourcesChange}
          />
            Shutterstock
          <br />
          <input
            type='checkbox'
            name='source'
            value='one23rf'
            onChange={this._handleSourcesChange}
          />
            123rf
          <br />
        </div>
        <br />
        <input type='submit' value='Search' />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onStyleChange: PropTypes.func.isRequired,
  onOrientationChange: PropTypes.func.isRequired,
  onSourcesChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  sources: PropTypes.array.isRequired,
};
