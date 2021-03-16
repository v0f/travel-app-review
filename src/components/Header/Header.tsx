import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { ISearch } from '../types/types';
import SelectLang from '../Select/Select';
import { useLocation } from 'react-router-dom';

import './Header.scss';

const Header: React.FC<ISearch> = ({ countries, updateCountries }) => {
  const route = useLocation();
  const isMainPage = route.pathname === '/';

  return (
    <header>
      <SelectLang />
      <Link to='/' className='logo'>
        .goAsia.
      </Link>
      {isMainPage && <Search countries={countries} updateCountries={updateCountries} />}
    </header>
  );
};

export default Header;
