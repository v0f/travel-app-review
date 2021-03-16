import React from 'react';
import Search from '../Search/ApiSearch';
import {IApiSearch} from '../types/types';
import SelectLang from '../Select/Select';
import { useLocation } from 'react-router-dom';

// const Header: React.FC<ISearch> = ({countries, updateCountries}) => {
const Header: React.FC<IApiSearch> = ({setSearchQuery}) => {
  const route = useLocation();
  const isMainPage = route.pathname === '/';
  return(
  <header>
    <SelectLang />
    {isMainPage && <Search
    // countries={countries}
    // updateCountries={updateCountries}
    setSearchQuery={setSearchQuery}
    />}
  </header>
  );
};

export default Header;
