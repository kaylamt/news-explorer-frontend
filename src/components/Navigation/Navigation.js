import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation(props) {
  const currentUser = React.useContext(CurrentUserContext);

  function signedInButton() {
    if (currentUser._id) {
      return (
        <div className={`navigation__profile-container navigation__profile-container_${props.cssModifier}`}>
          <span className={`navigation__profile-name navigation__profile-name_${props.cssModifier}`}>Elise</span>
          <span className={`navigation__profile-logout navigation__profile-logout_${props.cssModifier}`} alt="logout" ></span>
        </div>
      )
    } return (
      <span className={`navigation__sign-in navigation__sign-in_${props.cssModifier}`} onClick={props.openSignInPopup}>Sign In</span>
    )
  }

  function openMobileMenu() {
    document.querySelector('.navigation__container').classList.toggle('header_mobile_menu_opened')
    document.querySelector('.navigation__list').classList.toggle('list_mobile_menu_opened')
    document.querySelector('.navigation__menu-img').classList.toggle('img_mobile_menu_opened')
    document.querySelector('.navigation__logo').classList.toggle('logo_mobile_menu_opened')
  }

  return (
    <div className={`navigation navigation_${props.cssModifier}`}>
      <div className="navigation__container">
        <span className={`navigation__logo navigation__logo_${props.cssModifier}`} alt="logo" />
        <span className={`navigation__logo-saved-news navigation__logo-saved-news_${props.cssModifier}`} alt="logo" />
        <ul className={`navigation__links navigation__links_${props.cssModifier}`}>
          <li className="navigation__link">
            <NavLink exact to="/" activeClassName="home-active" className={`navigation__home-link navigation__home-link_${props.cssModifier}`}>Home</NavLink>
          </li>
          {currentUser._id &&
            <li className="navigation__link">
              <NavLink to="/saved-news" activeClassName="saved-articles-active" className={`navigation__saved-articles-link navigation__saved-articles-link_${props.cssModifier}`}>Saved articles</NavLink>
            </li>
          }
          {signedInButton()}
        </ul>
      </div>
      <div className={`navigation__menu navigation__menu_${props.cssModifier}`}>
        <span className={`navigation__menu-img navigation__menu-img_${props.cssModifier}`} alt="menu" onClick={openMobileMenu} ></span>
        <div className="navigation__list">
          <Link to="/" className="navigation__menu-home-link ">Home</Link>
          {currentUser._id &&
            <Link to="/saved-news" className="navigation__menu-saved-articles-link" >Saved articles</Link>
          }
          <span onClick={props.openSignInPopup} className="navigation__menu-sign-in">Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;