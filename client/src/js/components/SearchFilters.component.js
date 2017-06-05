import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchFilters extends Component {
  constructor(props) {
    super(props);

    this._handleStyleChange = this._handleStyleChange.bind(this);
    this._handleOrientationChange = this._handleOrientationChange.bind(this);
    this._handleSourcesChange = this._handleSourcesChange.bind(this);
    this._handleToggleFilters = this._handleToggleFilters.bind(this);
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

  _handleToggleFilters() {
    const { filterStatus } = this.props;
    this.props.onToggleFilters(filterStatus);
  }

  render() {
    const {
      filterStatus,
      style,
      orientation,
      sources,
    } = this.props;
    return (
      <div className='filtersContainer'>
        <div className='filtersButton'>
          <a className='button is-light' onClick={this._handleToggleFilters}>{filterStatus ? 'Close' : 'Filters'}</a>
        </div>
        {filterStatus &&
          <div className='filters'>
            <div className='field'>
              <p className='control'>
                <strong>File Type:</strong><br />
                <label htmlFor='style' className='radio'>
                  <input
                    type='radio'
                    name='style'
                    value='photo'
                    checked={style === 'photo'}
                    onChange={this._handleStyleChange}
                  />
                  Photo
                </label>
                <br />
                <label htmlFor='style' className='radio'>
                  <input
                    type='radio'
                    name='style'
                    value='illustration'
                    checked={style === 'illustration'}
                    onChange={this._handleStyleChange}
                  />
                  Illustration
                </label>
              </p>
            </div>
            <div className='field'>
              <p className='control'>
                <strong>Orientation:</strong><br />
                <label htmlFor='orientation' className='radio'>
                  <input
                    type='radio'
                    name='orientation'
                    value='landscape'
                    checked={orientation === 'landscape'}
                    onChange={this._handleOrientationChange}
                  />
                  Landscape
                </label>
                <br />
                <label htmlFor='orientation' className='radio'>
                  <input
                    type='radio'
                    name='orientation'
                    value='portrait'
                    checked={orientation === 'portrait'}
                    onChange={this._handleOrientationChange}
                  />
                  Portrait
                </label>
              </p>
            </div>
            <div className='field'>
              <p className='control'>
                <strong>Sources:</strong><br />
                <label htmlFor='source' className='radio'>
                  <input
                    type='checkbox'
                    name='source'
                    value='gettyimages'
                    checked={sources.indexOf('gettyimages') !== -1}
                    onChange={this._handleSourcesChange}
                  />
                  Getty Images
                </label>
                <br />
                <label htmlFor='source' className='radio'>
                  <input
                    type='checkbox'
                    name='source'
                    value='shutterstock'
                    checked={sources.indexOf('shutterstock') !== -1}
                    onChange={this._handleSourcesChange}
                  />
                  Shutterstock
                </label>
                <br />
                <label htmlFor='source' className='radio'>
                  <input
                    type='checkbox'
                    name='source'
                    value='one23rf'
                    checked={sources.indexOf('one23rf') !== -1}
                    onChange={this._handleSourcesChange}
                  />
                  123rf
                </label>
              </p>
            </div>
          </div>
        }
      </div>
    );
  }
}

SearchFilters.propTypes = {
  onStyleChange: PropTypes.func.isRequired,
  onOrientationChange: PropTypes.func.isRequired,
  onSourcesChange: PropTypes.func.isRequired,
  onToggleFilters: PropTypes.func.isRequired,
  sources: PropTypes.array.isRequired,
  style: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  filterStatus: PropTypes.bool.isRequired,

};
