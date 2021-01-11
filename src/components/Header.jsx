import React from 'react';
import { Link } from 'react-router-dom';

import logoSvg from '../assets/img/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <Link to='/'>
          <div className='header__logo'>
            <img src={logoSvg} alt='logo' />
          </div>
        </Link>
        <div className='header__nav'>
          <Link to='/'>Home</Link>
          <Link to='/allposts'>All Posts</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
