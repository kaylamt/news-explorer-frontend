import React from 'react';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import notFound from '../../images/notFound.svg';

function Header(props) {
  const [articleIndex, setArticleIndex] = React.useState(3);

  function handleSearch(query) {
    setArticleIndex(3);
    props.onSearch(query);
  }

  function showMore() {
    setArticleIndex(index => index + 3)
  }

  function hiddenArticles() {
    return props.articles.slice(articleIndex);
  }

  function showMoreButton() {
    if (hiddenArticles().length > 0) {
      return (
        <div className="search-results__button-container">
          <button className="search-results__button" onClick={showMore} >Show more</button>
        </div>
      )
    }
  }

  function searchResults() {
    if (props.articles.length > 0) {
      return (
        <div className="search-results">
          <NewsCardList articles={props.articles.slice(0, articleIndex)} inSearchResults={true} onSaveClick={props.onSaveClick} openSignUpPopup={props.openSignUpPopup} />
          {showMoreButton()}
        </div>
      )
    } else if (props.searchError) {
      return (
        <div className="search-not-found">
          <img className="search-not-found__image" src={notFound} alt="not-found"></img>
          <p className="search-not-found__text">Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.</p>
        </div>
      )
    } else if (props.searchAttempted) {
      return (
        <div className="search-not-found">
          <img className="search-not-found__image" src={notFound} alt="not-found"></img>
          <p className="search-not-found__title">Nothing found</p>
          <p className="search-not-found__text">Sorry, but nothing matched
your search terms.</p>
        </div>
      )
    }
    else if (props.searching) {
      return (
        <div className="preloader">
          <Preloader isShown={props.searching} />
        </div>
      )
    }
  }

  return (
    <>
      <div className="header">
        <Navigation cssModifier="home" openSignInPopup={props.openSignInPopup} onSignOut={props.onSignOut} />
        <div className="header__search-form-content">
          <h1 className="header__search-form-title">
            What's going on in the world?
          </h1>
          <p className="header__search-form-subtitle">
            Find the latest news on any topic and save them in your personal account.
        </p>
          <SearchForm onSearch={handleSearch} searchQuery={props.searchQuery} />
        </div>
      </div>
      {searchResults()}
    </>
  );
}

export default Header;