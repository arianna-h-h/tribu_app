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
          <li><Link to='/about'>TRAILS, AREAS & AMENITIES</Link></li>
          <li><Link to='/trails'>GEAR & APPAREL</Link></li>
          <li><Link to='/ammenities'>EMERGENCY CONTACTS</Link></li>
          <li><Link to='/store'>ABOUT US</Link></li>
        </ul>
      </DropdownContent>
    </Dropdown>
  </div>
);
