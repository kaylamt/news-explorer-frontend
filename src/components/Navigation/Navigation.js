import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../../images/menu.svg';

function Navigation() {
  return (
    <div className="navigation">
      <img src={menu} className="navigation__menu" alt="menu" />
      <div className="navigation__list">
        <Link to="/" className="navigation__home-link">Home</Link>
        <Link to="/saved-news" className="navigation__saved-articles-link">Saved articles</Link>
        <span className="header__sign-in">Sign In</span>
      </div>
    </div>
  );
}

export default Navigation;