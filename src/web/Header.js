import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>AboutPage</Link></li>
        <li><Link to='/trails'>Trails</Link></li>
        <li><Link to='/ammenities'>Ammenities</Link></li>
        <li><Link to='/store'>Store</Link></li>
        <li><Link to='/calendar'>Calendar</Link></li>
      </ul>
    </nav>
  </header>
);
