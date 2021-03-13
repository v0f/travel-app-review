import React from 'react';
import CardsCountry from './CardsCountry/CardsCountry'
import Video from '../CountryPage/Video'

import Widgets from '../CountryPage/Widgets/Widgets';

const MainPage: React.FC = () => {

  // TEMP DATA FOR TESTING
  const tempData = {
    countryName: 'Japan',
    capitalName: 'Tokyo',
    shortDescription: 'The land of the rising sun. Consisting of more than 3000 islands. Rodiina sushi, geisha, robots, anime, minimalism and Mount Fuji',
    currency: 'JPY',
    timeZone: 'Asia/Tokyo'
  }


  return (
    <div>
      <h1>Visit counries</h1>
      <CardsCountry
       countryName={tempData.countryName}
       capitalName={tempData.capitalName}
       shortDescription={tempData.shortDescription}
       />
       <Widgets
       countryName={tempData.countryName}
       capitalName={tempData.capitalName}
       currency={tempData.currency}
       timeZone={tempData.timeZone}
       />
       <Video />
    </div>
  );
};

export default MainPage;
