import { Button, IconButton, InputAdornment, TextField } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import React, { useCallback, useState, useEffect } from 'react';
import { ISearch } from '../types/types';
import LangContext from '../Language-context/LangContext';
import dict from '../../data/dictionary';
import ICountry from '../types/ICountry';

import './Search.css';

// interface IList {
//   [key:string]: Array<string>
// }

// const findMatches = (list: IList,textToMatch:String) => {
//   const isMatch = (str:string) => str.includes(textToMatch.toLowerCase());
//   const results: Array<Array<string|Array<string>>> = Object.entries(list).filter(([id, [country, capital]]) => isMatch(country) || isMatch(capital));

//   return Object.keys(Object.fromEntries(results));
// }

const getMatches = (countries: ICountry[], textToMatch: string): ICountry[] => {
  const text = textToMatch.toLowerCase();
  const isMatch = (str: string) => str.toLowerCase().includes(text);
  return countries.filter((country) => {
    const { countryName, capitalName } = country;
    return isMatch(capitalName) || isMatch(countryName);
  });
};

const Search: React.FC<ISearch> = ({ countries, updateCountries }) => {
  const { lang } = React.useContext(LangContext);

  // const data = require('../../data/data-countries.json');
  // const { lang } = useContext(LangContext);
  // const newData = Object.keys(data).reduce((acc:IList, item:string) => {
  //   acc[item] = [
  //     data[item].countryName[lang].toLowerCase(),
  //     data[item].capitalName[lang].toLowerCase()
  //   ]
  //   return acc;
  // },{});

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    document.getElementById('input-search')?.focus();
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
      // const matches:Array<string> = findMatches(newData, e.target.value);
      const matches: Array<ICountry> = getMatches(countries, e.target.value);
      updateCountries(matches);
    },
    [countries, updateCountries],
  );

  const resetInput = useCallback(() => {
    setSearchInput('');
    const matches: Array<ICountry> = getMatches(countries, '');
    updateCountries(matches);
  }, [countries, updateCountries]);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const matches: Array<ICountry> = getMatches(countries, searchInput);
      updateCountries(matches);
    },
    [countries, searchInput, updateCountries],
  );

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      <TextField
        className='search-input'
        id='input-search'
        placeholder={dict.search[lang]}
        value={searchInput}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton aria-label='clean input' onClick={resetInput} edge='end'>
                <CancelIcon></CancelIcon>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        type='submit'
        color='default'
        className='search-btn'
        startIcon={<SearchIcon />}></Button>
    </form>
  );
};

export default Search;
