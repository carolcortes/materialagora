import React from 'react';
import Logo from '../../superhero-logo.png'
import './header.css';

const Header = () => {
  return (
    <header className="main-header">
      <h1>SuperHero App</h1>
      <img src={Logo} alt="SuperHero Logo" />
    </header>
  );
}

export default Header;