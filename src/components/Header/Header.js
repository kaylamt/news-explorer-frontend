import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Header(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className={`header header_${props.cssModifier}`}>
      <div className="header__container">
        <img src={logo} className="header__logo" alt="logo" />
        <div className="header__links">
          <Link to="/" className={`header__home-link header__home-link_${props.cssModifier}`}>Home</Link>
          {currentUser._id &&
            <Link to="/saved-news" className="header__saved-articles-link">Saved articles</Link>
          }
          <span className="header__sign-in" onClick={props.openSignInPopup}>Sign In</span>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Header;