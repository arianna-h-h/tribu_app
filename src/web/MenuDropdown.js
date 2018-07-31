import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

export const MenuDropdown = () => (
  <div className='menu-dropdown'>
    <Dropdown>
      <DropdownTrigger> <i className='fas fa-bars fa-3x' /> </DropdownTrigger>
      <DropdownContent>
        <ul className='dropdown-content'>
          <li><Link to='/'>BASIC INFO & ACTIVITIES</Link> </li>
          <li><Link to='/trails'>TRAILS, AREAS & AMENITIES</Link></li>
          <li><Link to='/store'>GEAR & APPAREL</Link></li>
          <li><Link to='/emergency'>EMERGENCY CONTACTS</Link></li>
          <li><Link to='/about'>ABOUT US</Link></li>
        </ul>
      </DropdownContent>
    </Dropdown>
  </div>
);
