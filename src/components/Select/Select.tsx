import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import LangContext from '../Language-context/LangContext';
import dict from '../../data/dictionary';

const SelectLang: React.FC = () => {
  const { lang, changeLang } = React.useContext(LangContext);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedLang = event.target.value as string;
    changeLang(selectedLang);
  };

  const label = dict.lang;

  return (
    <FormControl>
      <InputLabel>{label[lang]}</InputLabel>
      <Select value={lang} onChange={handleChange}>
        <MenuItem value={'en'}>EN</MenuItem>
        <MenuItem value={'ru'}>RU</MenuItem>
        <MenuItem value={'be'}>BE</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectLang;
