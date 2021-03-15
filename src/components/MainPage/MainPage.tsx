import React from 'react';
import Grid from '@material-ui/core/Grid';

import './MainPage.css';

import CountryCard from '../Card/Card';
import ICountry from '../types/ICountry';

type Props = {
  history: any;
  countriesList: ICountry[];
  children: Array<string>;
};

const MainPage: React.FC<Props> = (props) => {
  const getCountryId = (id: string) => {
    props.history.push(`/country/${id}`);
  };

  return (
    <Grid className='cards-container' container spacing={4}>
      {/* {React.Children.map(props.children, (countryName) => {
        return <CountryCard id={countryName} getId={getCountryId} />;
      })} */}
      {
        props.countriesList.map((country) => (
          <CountryCard
            key={country.slug}
            id={country.slug}
            getId={getCountryId}
            country={country}
          />
        ))
      }
    </Grid>
  );
};

export default MainPage;
