import React from 'react';
import Search from '../Search/Search';
import {ISearch} from '../types/types';
import SelectLang from '../Select/Select';

const Header: React.FC<ISearch> = ({countries, updateCountries}) => {
  return(
  <header>
    <SelectLang />
    <Search
    countries={countries}
    updateCountries={updateCountries}
    />
  </header>
  );
};

export default Header;
