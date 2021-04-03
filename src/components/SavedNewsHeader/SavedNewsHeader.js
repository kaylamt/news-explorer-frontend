import React from 'react';
import Header from '../Header/Header';

function SavedNewsHeader(props) {
  return (
    <>
      <Header />
      <div className="saved-news-header">
        <p className="saved-news-header__subtitle">Saved articles</p>
        <h1 className="saved-news-header__title">Elise, you have 5 saved articles</h1>
        <p className="saved-news-header__keywords">By keywords: Nature, Yellowstone, and 2 other</p>
      </div>
    </>
  );
};

export default SavedNewsHeader;