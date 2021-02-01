import React from 'react';
import { Link } from 'react-router-dom';

import { isLogin } from '../localStorage';

import logoSvg from '../assets/img/logo.svg';
import { ActiveLink } from '../hooks/ActiveLink';

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
          <ActiveLink activeOnlyWhenExact={true} to='/' label='Home' />
          <ActiveLink to='/allposts' label='All Posts' />
          {isLogin() ? <ActiveLink to='/admin' label='Admin Panel' /> : ''}
        </div>
      </div>
    </div>
  );
};

export default Header;
