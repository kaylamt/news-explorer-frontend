import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import logoSavedNews from '../../images/logo-saved-news.svg';
import logout from '../../images/logout.svg';
import Navigation from '../Navigation/Navigation'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Header(props) {
  const currentUser = React.useContext(CurrentUserContext);

  function signedInButton() {
    if (currentUser._id) {
      return (
        <div className={`header__profile-container header__profile-container_${props.cssModifier}`}>
          <span className={`header__profile-name header__profile-name_${props.cssModifier}`}>Elise</span>
          <img src={logout} className={`header__profile-logout header__profile-logout_${props.cssModifier}`} alt="logout" />
        </div>
      )
    } return <span className={`header__sign-in header__sign-in_${props.cssModifier}`} onClick={props.openSignInPopup}>Sign In</span>
  }

  return (
    <div className={`header header_${props.cssModifier}`}>
      <div className="header__container">
        <img src={logo} className={`header__logo header__logo_${props.cssModifier}`} alt="logo" />
        <img src={logoSavedNews} className={`header__logo-saved-news header__logo-saved-news_${props.cssModifier}`} alt="logo" />
        <div className={`header__links header__links_${props.cssModifier}`}>
          <Link to="/" className={`header__home-link header__home-link_${props.cssModifier}`}>Home</Link>
          {currentUser._id &&
            <Link to="/saved-news" className={`header__saved-articles-link header__saved-articles-link_${props.cssModifier}`}>Saved articles</Link>
          }
          {signedInButton()}
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Header;