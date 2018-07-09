import React from 'react';

import logo from './LogoFinal.png';

export const Header = () => (
  <div className='bg-yellow'>
    <header className='header'>
      <img className='header-logo' src={logo} alt={'Tribu Logo'} />
    </header>
  </div>
);
