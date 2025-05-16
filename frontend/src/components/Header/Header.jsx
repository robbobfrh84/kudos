import React from 'react';
import "./header.css";
import logo from '../../assets/board_icon.png';

const Header = () => {
  return (
    <header>
      <div className='image-container'>
        <img src={logo} alt="Kudos Board Logo" />
      </div>
      <h1>Kudos to All</h1>
    </header>
  );
};

export default Header;