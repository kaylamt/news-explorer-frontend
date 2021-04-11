import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  return (
    <ul className="news-card-list">
      {props.articles.map((article) => (
        <NewsCard article={article} key={article._id} inSearchResults={props.inSearchResults} />
      ))}
    </ul >
  );
};

export default NewsCardList;
