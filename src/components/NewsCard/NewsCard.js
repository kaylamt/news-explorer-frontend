import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function NewsCard(props) {
  const currentUser = React.useContext(CurrentUserContext);

  function deleteArticle() {
    props.onDeleteArticleClick(props.article._id);
  }

  function actionButton() {
    if (props.inSearchResults) {
      if (currentUser._id) {
        return (
          <div className="news-card__button-container">
            <button aria-label="save button" className="news-card__button news-card__button_save" type="button" onClick={onSaveClick} />
            <span className="news-card__popup">Save article</span>
          </div>
        )
      } else {
        return (
          <div className="news-card__button-container">
            <button aria-label="save button" className="news-card__button news-card__button_save" type="button" onClick={onSaveClick} />
            <span className="news-card__popup">Sign in to save articles</span>
          </div>
        )
      }
    } return (
      <div className="news-card__button-container">
        <button aria-label="delete button" className="news-card__button news-card__button_delete" type="button" onClick={deleteArticle} />
        <span className="news-card__popup">Remove from saved</span>
      </div>
    )
  }

  function onSaveClick(e) {
    if (currentUser._id) {
      e.target.classList.toggle('news-card__button_active')
    }
  }

  return (
    <li className="news-card">
      <div className="news-card__image-info">
        <p className="news-card__keyword">{props.article.keyword}</p>
        {actionButton()}
        <img className="news-card__image" alt={props.article.title} src={props.article.image} />
      </div>
      <div className="news-card__info">
        <div className="news-card__title-container">
          <p className="news-card__date">{props.article.date}</p>
          <h2 className="news-card__title">{props.article.title}</h2>
        </div>
        <p className="news-card__text">{props.article.text}</p>
        <a className="news-card__link" href={props.article.link} target="_blank" rel="noreferrer" >{props.article.source}
        </a>
      </div>
    </li>
  );
};

export default NewsCard;

