import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainSlider from './MainSlider';

import './MainPage.scss';

import CountryCard from '../Card/Card';
import ICountry from '../types/ICountry';
// import { Typography } from '@material-ui/core';
import dict from '../../data/dictionary';
import LangContext from '../Language-context/LangContext';

type Props = {
  history: any;
  countriesList: ICountry[];
};

const MainPage: React.FC<Props> = (props) => {
  const getCountryId = (id: string) => {
    props.history.push(`/country/${id}`);
  };
  const { lang } = React.useContext(LangContext);

  return (
    <>
      <MainSlider />

      <Grid className='cards-container' container spacing={4}>
        {props.countriesList.length ? props.countriesList.map((country) => (
          <CountryCard
            key={country.slug}
            id={country.slug}
            getId={getCountryId}
            country={country}
          />
        )) : <span className="not-found">
        {dict.noData[lang]}
      </span>}
      </Grid>
    </>
  );
};

export default MainPage;
