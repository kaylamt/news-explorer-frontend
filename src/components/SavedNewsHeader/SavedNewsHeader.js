import React from 'react';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);

  function keywordList() {
    const counts = {};

    props.keywords.forEach(keyword => {
      counts[keyword] = counts[keyword] ? counts[keyword] + 1 : 1;
    })

    const keywordsSorted = Object.keys(counts).sort((a, b) => counts[a] - counts[b]).reverse();

    if (keywordsSorted.length > 3) {
      return `${keywordsSorted[0]}, ${keywordsSorted[1]}, and ${keywordsSorted.length - 2} others`
    } else {
      return keywordsSorted.join(', ')
    }
  }

  return (
    <>
      <Navigation cssModifier="saved-news" onSignOut={props.onSignOut} />
      <div className="saved-news-header">
        <p className="saved-news-header__subtitle">Saved articles</p>
        <h1 className="saved-news-header__title">{currentUser.name}, you have {props.articleCount} saved articles</h1>
        <p className="saved-news-header__keywords">By keywords: <strong>{keywordList()}</strong></p>
      </div>
    </>
  );
};

export default SavedNewsHeader;