import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, articlesDate, author, source } =
    props;
  return (
    <div>
      <div className='card'>
        <span
          className='mt-2 position-absolute top-0 translate-middle badge rounded-pill bg-danger'
          style={{
            left: '90%',
            zIndex: '1',
          }}>
          {source}
        </span>
        <img src={imageUrl} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <p className='card-text'>
            <small>
              By {author} on {new Date(articlesDate).toGMTString()}
            </small>
          </p>
          <a
            rel='noreferrer'
            href={newsUrl}
            target='_blank'
            className='btn btn-sm btn-dark'>
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
