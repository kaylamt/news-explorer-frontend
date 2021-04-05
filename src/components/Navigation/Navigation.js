import React from 'react';
import menu from '../../images/menu.svg';

function Navigation() {
  return (
    <div className="navigation">
      <img src={menu} className="navigation__menu" alt="menu" />
    </div>
  );
}

export default Navigation;