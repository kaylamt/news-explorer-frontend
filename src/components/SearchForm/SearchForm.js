import React from 'react';
import Header from '../Header/Header'

function SearchForm(props) {
  return (
    <div className="search-form">
      <Header cssModifier="home" onLogin={props.onLogin} openSignInPopup={props.openSignInPopup} />
      <div className="search-form__content">
        <h1 className="search-form__title">
          What's going on in the world?
          </h1>
        <div className="search-form__subtitle">
          Find the latest news on any topic and save them in your personal account.
          </div>
        <div className="search-form__search-container">
          <input id="avatar" type="url" className="search-form__search-field" name="avatar" placeholder="Enter topic" required />
          <button aria-label="search button" className="search-form__search-button" type="button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;