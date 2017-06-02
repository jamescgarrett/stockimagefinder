import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ results, error }) => (
  <div>
    <h1 className='title'>Searching for: {results.query}</h1>
    <p>{error ? error : ''}</p>
    {results.data.gettyimages !== null &&
      <div className='column'>
        <div className='heading'>
          <h2 className='title'>Getty Images</h2>
        </div>
        <div className='columns is-multiline'>
          {results.data.gettyimages.images.map(result => (
            <div key={result.id} className='column is-3'>
              <figure className='image is-128x128'>
                <img
                  src={result.display_sizes[0].uri}
                  alt={result.id}
                />
                ID: {result.Id}
                <br />
                {result.referral_destinations.map(dest => (
                  <a key={`${dest.site_name}_${result.id}`} href={dest.url} target='_blank' rel='noopener noreferrer'>{dest.site_name}</a>
                ))}
              </figure>
            </div>
          ))}
        </div>
      </div>
    }

    {results.data.shutterstock !== null &&
      <div className='column'>
        <div className='heading'>
          <h2 className='title'>Shutterstock</h2>
        </div>
        <div className='columns is-multiline'>
          {results.data.shutterstock.data.map(result => (
            <div key={result.id} className='column is-3'>
              <figure className='image is-128x128'>
                <img src={`http://image.shutterstock.com/display_pic_with_logo/0/0/${result.id}.jpg`} alt={result.id} />
                ID: {result.id}
                <br />
                <a href={`http://www.shutterstock.com/pic.mhtml?id=${result.id}`} target='_blank' rel='noopener noreferrer'>Shutterstock</a>
              </figure>
            </div>
          ))}
        </div>
      </div>
    }

    {results.data.one23rf !== null &&
      <div className='column'>
        <div className='heading'>
          <h2 className='title'>123rf</h2>
        </div>
        <div className='columns is-multiline'>
          {results.data.one23rf.Images.map(result => (
            <div key={result.Id} className='column is-3'>
              <figure className='image is-128x128'>
                <img
                  src={`http://images.assetsdelivery.com/thumbnails/${result.ContributorId}/${result.Folder}/${result.Filename}.jpg`}
                  alt={result.Id}
                />
                ID: {result.id}
                <br />
                <a href={`http://www.123rf.com/search.php?word=${result.Id}&amp;imgtype=&amp;Submit=+&amp;t_word=&amp;t_lang=en&amp;orderby=0`} target='_blank' rel='noopener noreferrer'>123rf</a>
              </figure>
            </div>
          ))}
        </div>
      </div>
    }
  </div>
);

SearchResults.propTypes = {
  results: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
};

export default SearchResults;
