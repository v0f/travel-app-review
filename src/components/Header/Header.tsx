import React from 'react';
import Search from '../Search/Search';
import {ISearch} from '../types/types';

const Header: React.FC<ISearch> = ({countries, updateCountries}) => {
  return(
  <header>
      <Search
      countries={countries}
      updateCountries={updateCountries}
      />
  </header>
  );
};

export default Header;
