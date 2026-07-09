import React from 'react';
import MenuItem from './MenuItem';
import './portfolio.css';
const Menu = ({ items }) => {
  return (
    <ul className="project-list">
      {items.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </ul>
  );
};

export default Menu;