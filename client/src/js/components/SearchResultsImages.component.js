import React from 'react';
import PropTypes from 'prop-types';

const SearchResultsImages = ({ results }) => (
  <div className='columns'>
    {results.data.gettyimages !== undefined &&
      <div className='column'>
        <h2 className='title sourceTitle'>Getty Images</h2>
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

    {results.data.shutterstock !== undefined &&
      <div className='column'>
        <h2 className='title sourceTitle'>Shutterstock</h2>
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

    {results.data.one23rf !== undefined &&
      <div className='column'>
        <h2 className='title sourceTitle'>123rf</h2>
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

SearchResultsImages.propTypes = {
  results: PropTypes.object.isRequired,
};

export default SearchResultsImages;
