import React from 'react';

import { Link } from 'react-router-dom';
import Search from '../Search/ApiSearch';
import {IApiSearch} from '../types/types';
import SelectLang from '../Select/Select';
import { useLocation } from 'react-router-dom';

import './Header.scss';

const Header: React.FC<IApiSearch> = ({setSearchQuery}) => {
  const route = useLocation();
  const isMainPage = route.pathname === '/';
  return(
  <header>
    <SelectLang />
    <Link to='/' className='logo'>
        .goAsia.
      </Link>
    {isMainPage && <Search setSearchQuery={setSearchQuery}/>}
  </header>
  );
};

export default Header;
