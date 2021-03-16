import React from 'react';
import Search from '../Search/Search';
import {ISearch} from '../types/types';
import SelectLang from '../Select/Select';
import { useLocation } from 'react-router-dom';

const Header: React.FC<ISearch> = ({countries, updateCountries}) => {
  const route = useLocation();
  const isMainPage = route.pathname === '/';
  return(
  <header>
    <SelectLang />
    {isMainPage && <Search
    countries={countries}
    updateCountries={updateCountries}
    />}
  </header>
  );
};

export default Header;
