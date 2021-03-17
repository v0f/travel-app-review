import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import LangContext from '../Language-context/LangContext';

import './Select.scss';

const SelectLang: React.FC = () => {
  const { lang, changeLang } = React.useContext(LangContext);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedLang = event.target.value as string;
    changeLang(selectedLang);
  };

  return (
    <FormControl className='select-lang'>
      <Select value={lang} onChange={handleChange}>
        <MenuItem value={'en'} >EN</MenuItem>
        <MenuItem value={'ru'} >RU</MenuItem>
        <MenuItem value={'be'} >BE</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectLang;
