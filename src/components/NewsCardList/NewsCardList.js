import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
//flexbox container

function NewsCardList(props) {
  return (
    <>
      <section className="news-card-list">
        {props.articles.map((article) => (
          <NewsCard article={article} key={article._id} />
        ))}
      </section>
    </>
  );
};

export default NewsCardList;
