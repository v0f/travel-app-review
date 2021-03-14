import React from 'react';
import Grid from '@material-ui/core/Grid';

import './MainPage.css';

import CountryCard from '../Card/Card';

type Props = {
  children: Array<string>;
};

const MainPage: React.FC<Props> = (props: Props) => {
  return (
    <Grid className='cards-container' container spacing={4}>
      {React.Children.map(props.children, (countryName) => {
        return <CountryCard id={countryName} />;
      })}
    </Grid>
  );
};

export default MainPage;
