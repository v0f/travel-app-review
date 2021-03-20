import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Search from '../Search/ApiSearch';
import { IApiSearch } from '../types/types';
import SelectLang from '../Select/Select';

import { useAuth } from '../AuthContext/AuthContext';

import './Header.scss';

const Header: React.FC<IApiSearch> = ({ setSearchQuery }) => {
  const { avatarUrl, userLogin, logout } = useAuth();

  const route = useLocation();
  const isMainPage = route.pathname === '/';
  const isLoginPage = route.pathname === '/login' || route.pathname === '/register';

  const authLinkEl = avatarUrl ? (
    <Avatar alt='user avatar' src={avatarUrl} />
  ) : (
    <AccountCircle className='login-icon' />
  );
  const logOutEl = userLogin && !isLoginPage ? <ExitToAppIcon onClick={logout} /> : null;

  useEffect(() => {}, [avatarUrl]);

  return (
    <header>
      <div className={!isLoginPage ? 'header-wrapper' : 'header-wrapper header-login'}>
        <div className='header-left'>
          <Link to='/' className='logo'>
            .goAsia.
          </Link>
          {isMainPage && <Search setSearchQuery={setSearchQuery} />}
        </div>
        <div className='header-right'>
          <SelectLang />
          {!isLoginPage && <Link to='/login'>{authLinkEl}</Link>}
          {logOutEl}
        </div>
      </div>
    </header>
  );
};

export default Header;
