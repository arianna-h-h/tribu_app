import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationBar = () => (
  <header>
    <nav className='nav-bar'>
      <Link to='/' className='white-text'>Home</Link>
      <Link to='/about' className='white-text'>AboutPage</Link>
      <Link to='/trails' className='white-text'>Trails</Link>
      <Link to='/ammenities' className='white-text'>Ammenities</Link>
      <Link to='/store' className='white-text'>Store</Link>
      <Link to='/calendar' className='white-text'>Calendar</Link>
    </nav>
  </header>
);
