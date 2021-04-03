import React from 'react';
// import NewsCard from '../NewsCard/NewsCard';
//flexbox container

function NewsCard(props) {
  return (
    <div className="news-card">
      <div className="news-card__image-container">
        <p className="news-card__keyword">{props.article.keyword}</p>
        {/* <button aria-label="delete button" className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick} /> */}
        <img className="news-card__image" alt={props.article.title} src={props.article.image} />
      </div>
      <div className="news-card__info-container">
        <div className="news-card__title-container">
          <p className="news-card__date">{props.article.date}</p>
          <h2 className="news-card__title">{props.article.title}</h2>
        </div>
        <div className="news-card__text-container">
          <p className="news-card__text">{props.article.text}</p>
          <a class="news-card__link" href={props.article.link}>{props.article.source}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

