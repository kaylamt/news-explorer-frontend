import React from 'react';
import Navigation from '../Navigation/Navigation';

function SavedNewsHeader(props) {
  return (
    <>
      <Navigation cssModifier="saved-news" />
      <div className="saved-news-header">
        <p className="saved-news-header__subtitle">Saved articles</p>
        <h1 className="saved-news-header__title">Elise, you have {props.articleCount} saved articles</h1>
        <p className="saved-news-header__keywords">By keywords: <strong>Nature, Yellowstone, and 2 other</strong></p>
      </div>
    </>
  );
};

export default SavedNewsHeader;