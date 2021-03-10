import React from 'react';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
 import CardsCountry from './CardsCountry/CardsCountry'
// import Video from '../CountryPage/Video'

import Time from '../CountryPage/Time'
import Currency from '../CountryPage/Currency'

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>Visit counries</h1>
      <CardsCountry
       countryName={'Japan'}
       capitalName={'Tokyo'}
       shortDescription={'Lorem ipsum dollar'}
       />

      {/*ВИДЖЕТЫ. ВСЁ, ЧТО НИЖЕ,  ЭТО ПЕРЕНЕСТИ В КОМПОНЕНТ CountryPage */}
      <Time 
      timeZone={'Asia/Tokyo'}
      capitalName={'Tokyo'}
      />

      <Currency
      currency={'JPY'}
      />
    </div>
  );
};

export default MainPage;
