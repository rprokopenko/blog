import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import logoSvg from '../assets/img/logo.svg';

export const ActiveLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <Link className={match ? 'active' : ''} to={to}>
      {label}
    </Link>
  );
};

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
        </div>
      </div>
    </div>
  );
};

export default Header;
