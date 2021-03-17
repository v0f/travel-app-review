import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Search from '../Search/ApiSearch';
import { IApiSearch } from '../types/types';
import SelectLang from '../Select/Select';

import './Header.scss';

const Header: React.FC<IApiSearch> = ({ setSearchQuery }) => {
  const route = useLocation();
  const isMainPage = route.pathname === '/';
  const isLoginPage = route.pathname === '/login' || route.pathname === '/register';

  return (
    <header>
      <div className="header-wrapper">
          <div className="header-left">
            <Link to='/' className='logo'>
              .goAsia.
            </Link>
            {isMainPage && <Search setSearchQuery={setSearchQuery} />}
          </div>
          <div className="header-right">
            <SelectLang />
            {!isLoginPage && (
              <Link to='/login'>
                <AccountCircle className='login-icon' />
              </Link>
             )}
          </div>
        </div>
    </header>
  );
};

export default Header;
