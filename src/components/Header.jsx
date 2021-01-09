import React from 'react';

import logoSvg from '../assets/img/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__logo'>
          <img src={logoSvg} alt='logo' />
        </div>
        <div className='header__nav'>
          <a href='/'>Home</a>
          <a href='/'>All Posts</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
