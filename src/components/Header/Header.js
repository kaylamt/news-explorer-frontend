import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation'

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <img src={logo} className="header__logo" alt="logo" />
        <div className="header__links">
          <Link to="/" className="header__home-link">Home</Link>
          {/* <Link to="/saved-news" className="header__saved-articles-link">Saved articles</Link> */}
          <span className="header__sign-in">Sign In</span>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Header;