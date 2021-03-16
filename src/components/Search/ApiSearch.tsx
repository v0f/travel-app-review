import { Button, IconButton, InputAdornment, TextField } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import React, { useCallback, useState, useEffect } from 'react';
import {IApiSearch} from '../types/types';

const Search: React.FC<IApiSearch> = ({setSearchQuery}) => {

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    document.getElementById('input-search')?.focus();
  },[]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setSearchQuery(e.target.value);
  },[setSearchQuery]);

  const resetInput = useCallback(()=> {
    setSearchInput('');
    setSearchQuery('');
  },[setSearchQuery]);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // force state update to make api query
    setSearchQuery(`${searchInput}`.padEnd(Math.round(Math.random()*10)));
  },[searchInput, setSearchQuery]);

  return(
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id='input-search' label="Search" variant="outlined" placeholder="Search"
          className='search-input'
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
        <Button
          className='search-btn'
          type="submit"
          color="default"
          startIcon={<SearchIcon />}
        ><>search</></Button>
    </form>
  );
};

export default Search;
