import { Button, IconButton, InputAdornment, TextField } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import React, { useCallback, useState, useEffect } from 'react';
import { IApiSearch } from '../types/types';
import dict from '../../data/dictionary';
import LangContext from '../Language-context/LangContext';

import './Search.scss';

const Search: React.FC<IApiSearch> = ({ setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState('');
  const { lang } = React.useContext(LangContext);

  useEffect(() => {
    document.getElementById('search-input')?.focus();
    setSearchQuery('');
  }, [setSearchQuery]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
      setSearchQuery(e.target.value);
    },
    [setSearchQuery],
  );

  const resetInput = useCallback(() => {
    setSearchInput('');
    setSearchQuery('');
  }, [setSearchQuery]);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // force state update to make api query
      setSearchQuery(`${searchInput}`.padEnd(Math.round(Math.random() * 10)));
    },
    [searchInput, setSearchQuery],
  );

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      <TextField
        id='search-input'
        className='search-input'
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
        className='search-btn'
        type='submit'
        color='default'
        startIcon={<SearchIcon />}></Button>
    </form>
  );
};

export default Search;
