import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  return (
    <ul className="news-card-list">
      <div className="news-card-list__container">
        {props.articles.map((article) => (
          <NewsCard article={article} key={article._id} inSearchResults={props.inSearchResults} />
        ))}
      </div>
    </ul >
  );
};

export default NewsCardList;
