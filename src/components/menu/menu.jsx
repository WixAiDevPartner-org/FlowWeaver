import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

const Menu = () => {
  const menuOptions = [
    { label: 'Home', link: '/' },
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Settings', link: '/settings' },
    { label: 'Profile', link: '/profile' },
    { label: 'Logout', link: '/logout' }
  ];

  return (
    <nav className="menu">
      {menuOptions.map((option, index) => (
        <MenuItem key={index} label={option.label} link={option.link} />
      ))}
    </nav>
  );
};

export default Menu;
