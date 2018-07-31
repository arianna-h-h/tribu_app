import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown, { DropdownTrigger, DropdownContent, hide } from 'react-simple-dropdown';

export const MenuDropdown = () => (
  <div className='menu-dropdown'>
    <Dropdown ref={element => { this.dropdown = element }}>
      <DropdownTrigger> <i className='fas fa-bars fa-3x' /> </DropdownTrigger>
      <DropdownContent>
        <ul>
          <li onClick={() => this.dropdown.hide()}><Link to='/'>BASIC INFO & ACTIVITIES</Link></li>
          <li onClick={() => this.dropdown.hide()}><Link to='/trails'>TRAILS, AREAS & AMENITIES</Link></li>
          <li onClick={() => this.dropdown.hide()}><Link to='/store'>GEAR & APPAREL</Link></li>
          <li onClick={() => this.dropdown.hide()}><Link to='/emergency'>EMERGENCY CONTACTS</Link></li>
          <li onClick={() => this.dropdown.hide()}><Link to='/about'>ABOUT US</Link></li>
        </ul>
      </DropdownContent>
    </Dropdown>
  </div>
);
