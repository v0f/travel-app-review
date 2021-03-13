import React from 'react';
import CardsCountry from './CardsCountry/CardsCountry'
import Widgets from '../CountryPage/Widgets/Widgets';
import Map from '../CountryPage/Map';
import './CountryPage.css'

const Player = require('video-react');



const MainPage: React.FC = () => {
  // TEMP DATA FOR TESTING
  const tempData = {
    countryName: 'Japan',
    capitalName: 'Tokyo',
    shortDescription: 'The land of the rising sun. Consisting of more than 3000 islands. Rodiina sushi, geisha, robots, anime, minimalism and Mount Fuji',
    currency: 'JPY',
    timeZone: 'Asia/Tokyo',
    geoCenter: [139.77098768864576, 35.69016815938184],
    countryCode: 'JPN'
  }

  return (
    <>
      {/* <CardsCountry
      countryName={tempData.countryName}
      capitalName={tempData.capitalName}
      shortDescription={tempData.shortDescription}
      /> */}
      
       {/* НИЖЕ - КОМПОНЕНТ ДЛЯ COUNTRY PAGE */}
      <div className="cover">
        <div className="cover__text" >
          <h1 className="cover__title">{tempData.countryName}</h1>
          <hr/>
          <p className="cover__subtitle">{tempData.shortDescription}</p>
        </div>
      </div>
      <div className="main-content">

        <Map
        geoCenter={tempData.geoCenter}
        countryCode={tempData.countryCode}
        />

        <Widgets
        countryName={tempData.countryName}
        capitalName={tempData.capitalName}
        currency={tempData.currency}
        timeZone={tempData.timeZone}
        />

        {/* <Player
        playsInline
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        /> */}

      </div>
    </>
  );
};

export default MainPage;
