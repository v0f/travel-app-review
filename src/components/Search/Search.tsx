import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import {ISearch} from '../types/types';

interface IList {
  [key:string]: Array<string>
}

const getCountriesData = () => {
  return require('../../data/data-countries.json');
}

const findMatches = (list: IList,textToMatch:String) => {
  const isMatch = (str:string) => str.includes(textToMatch.toLowerCase());
  const results: Array<Array<string|Array<string>>> = Object.entries(list).filter(([id, [country, capital]]) => isMatch(country) || isMatch(capital));

  return Object.keys(Object.fromEntries(results));
}

const Search: React.FC<ISearch> = ({countries, updateCountries}) => {
  const data = getCountriesData();
  const lang = 'en';
  const newData = Object.keys(data).reduce(
    (acc:IList, item:string) => {acc[item] = [
      data[item].countryName[lang].toLowerCase(),
      data[item].capitalName[lang].toLowerCase()
    ]
  return acc},{});

  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    const matches:Array<string> = findMatches(newData, e.target.value);
    updateCountries(matches);
  }

  return(
      <form className='g' noValidate autoComplete="off">
        <TextField label="Search" variant="outlined" placeholder="Search"
        value={searchInput}
        onChange={handleChange}/>
    </form>
  );
};

export default Search;
