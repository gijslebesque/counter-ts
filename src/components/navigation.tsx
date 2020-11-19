import React from 'react';
import Logo from '../images/tmi-logo.png';

export default function Navigation() {
  return (
    <nav className="navigation flex flex-align-left">
      <img src={Logo} alt="Logo" className="logo" />
    </nav>
  );
}
