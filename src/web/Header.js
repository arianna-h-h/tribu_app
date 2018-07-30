import React from 'react';
import { MenuDropdown } from './MenuDropdown';
import logo from './LogoFinal.png';

export const Header = ({ title }) => (
  <div className='bg-brown'>
    <header className='header'>
      <MenuDropdown />
      <div>{title}</div>
      <img className='header-logo' src={logo} alt={'Tribu Logo'} />
      <div className='social'>social icons </div>
    </header>
  </div>
);
