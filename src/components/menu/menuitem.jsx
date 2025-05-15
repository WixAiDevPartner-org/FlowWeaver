import React from 'react';

const MenuItem = ({ label, link }) => {
  return (
    <a href={link} className="menu-item">
      {label}
    </a>
  );
};

export default MenuItem;
