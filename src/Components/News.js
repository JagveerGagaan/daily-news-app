import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalFirstLetter = (string) => {
    return (
      string.slice(0, 1).toUpperCase() +
      string.slice(1, string.length).toLowerCase()
    );
  };

  const updateNews = async () => {
    props.setProgress(5);
    props.setProgress(15);

    setLoading(true);
    setPage(page + 1);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4164cc6faad2423fa1df78508369a629&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(25);
    props.setProgress(35);

    props.setProgress(45);
    props.setProgress(55);

    let data = await fetch(url);
    props.setProgress(65);
    props.setProgress(75);

    let parsedData = await data.json();
    props.setProgress(85);
    props.setProgress(95);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalFirstLetter(props.category)} - NewsApp`;
    updateNews();
  }, []);

  // const handlePrevClick = async () => {
  //   setPage(page-1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   setPage(page+1);
  //   updateNews();

  // };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4164cc6faad2423fa1df78508369a629&page=${page}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className='text-center' style={{ margin: '65px 0px 30px 0px' }}>
        NewsApp - Top {capitalFirstLetter(props.category)} Headlines
      </h1>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}>
        <div className='container'>
          <div className='row'>
            {articles.map((myElement) => {
              return (
                <div className='col-md-4' key={myElement.url}>
                  <NewsItem
                    title={myElement.title}
                    description={
                      myElement.description ? myElement.description : ''
                    }
                    imageUrl={
                      myElement.urlToImage
                        ? myElement.urlToImage
                        : 'https://ichef.bbci.co.uk/news/1024/branded_news/6D88/production/_122504082_mediaitem122504081.jpg'
                    }
                    newsUrl={myElement.url}
                    author={myElement.author ? myElement.author : 'Unknown'}
                    articlesDate={myElement.publishedAt}
                    source={myElement.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 6,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
