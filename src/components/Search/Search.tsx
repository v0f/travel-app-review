import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import React, { useCallback, useState } from 'react';
import {ISearch} from '../types/types';
// import LangContext from '../Language-context/LangContext';
import ICountry from '../types/ICountry';

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
    return (isMatch(capitalName) || isMatch(countryName));
  });
}

const Search: React.FC<ISearch> = ({countries, updateCountries}) => {
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

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    // const matches:Array<string> = findMatches(newData, e.target.value);
    const matches:Array<ICountry> = getMatches(countries, e.target.value);
    updateCountries(matches);
  },[countries, updateCountries]);

  const resetInput = useCallback(()=> {
    setSearchInput('');
    const matches:Array<ICountry> = getMatches(countries, '');
    updateCountries(matches);
  },[countries, updateCountries]);

  return(
      <form className='g' noValidate autoComplete="off">
        <TextField id='input-search' label="Search" variant="outlined" placeholder="Search"
          value={searchInput}
          onChange={handleChange}
          InputProps={{
            endAdornment:<InputAdornment position="end">
              <IconButton
                aria-label="clean input"
                onClick={resetInput}
                edge="end"
              ><CancelIcon></CancelIcon></IconButton>
            </InputAdornment>,
          }}
        />
    </form>
  );
};

export default Search;
