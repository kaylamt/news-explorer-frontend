import logo from './images/header-logo.svg';
import './Template.css';

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <img src={logo} className="header__logo" alt="logo" />
        <div className="header__links">
          <span className="header__home-link">Home</span>
          <span className="header__sign-in">Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default Header;