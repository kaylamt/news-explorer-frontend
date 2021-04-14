import React from 'react';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);

  function keywordList() {

  }

  return (
    <>
      <Navigation cssModifier="saved-news" onSignOut={props.onSignOut} />
      <div className="saved-news-header">
        <p className="saved-news-header__subtitle">Saved articles</p>
        <h1 className="saved-news-header__title">{currentUser.name}, you have {props.articleCount} saved articles</h1>
        <p className="saved-news-header__keywords">By keywords: <strong>{props.keywords}</strong></p>
      </div>
    </>
  );
};

export default SavedNewsHeader;