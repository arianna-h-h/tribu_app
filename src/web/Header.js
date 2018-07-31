import React from 'react';
import { MenuDropdown } from './MenuDropdown';
import logo from './LogoFinal.png';

export const Header = ({ title }) => (
  <div className='bg-brown'>
    <header className='header'>
      <MenuDropdown />
      <div>{title}</div>
      <a href='/'>
        <img className='header-logo' src={logo} alt={'Tribu Logo'} />
      </a>
      <div className='social'>
        <a href='https://www.instagram.com/tribuoutdoorsmx/'>
          <i className='fab fa-instagram fa-3x icon' />
        </a>
        <a href='https://www.instagram.com/tribuoutdoorsmx/'>
          <i className='fab fa-facebook fa-3x icon' href='https://www.instagram.com/tribuoutdoorsmx/' />
        </a>
      </div>
    </header>
  </div>
);
