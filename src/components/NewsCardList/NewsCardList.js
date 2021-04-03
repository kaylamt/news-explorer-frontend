import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
//flexbox container

function NewsCardList(props) {
  return (
    <div>
      <section className="news-card-list">
        {props.articles.map((article) => (
          <NewsCard article={article} key={article._id} />
        ))}
      </section>
    </div>
  );
};

export default NewsCardList;
