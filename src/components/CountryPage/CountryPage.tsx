import React from 'react';
import Widgets from '../CountryPage/Widgets/Widgets';
import Map from '../CountryPage/Map';

import Video from './Video';

interface CountryProps {
  countryId: string;
}

const CountryPage: React.FC<CountryProps> = ({ countryId }) => {

    // TEMP DATA FOR TESTING
    const tempData = {
      countryName: 'Japan',
      capitalName: 'Tokyo',
      shortDescription: 'The land of the rising sun. Consisting of more than 3000 islands. Rodiina sushi, geisha, robots, anime, minimalism and Mount Fuji',
      currencyCode: 'JPY',
      timeZone: 'Asia/Tokyo',
      geoCenter: [139.77098768864576, 35.69016815938184],
      countryCode: 'JPN',
      currency: 'Japanese yen',
      description: "Japan is probably the most unusual country on the planet. Many of those who have been here call it a country of anothercivilization. Indeed, there is much that is unusual and sometimes defies standard logical, ethical and cultural thinking. And all due to the fact that for a long time Japan was a closed country for all foreigners. be limiting foreign presence in the country in the 17th century, Japan thus protected its culture and traditions from foreign influence. For almost 250 years, until the Meiji Restoration, the country developed in its own way. This period was marked be the flourishing of many trends in art and culture, which to this day are strongly associated with Japan. At this time, haiku poetry, kabuki drama, plebeian novels, woodcuts appeared, as well as the Ura Senke tea ceremony school - the largest of the modern ones. This is the heyday of the samurai class with its moral code bushi-do  - literally 'the way of the warrior. All this has left a significant imprint on modern Japanese society, and althoughin recent years Japanese culture has been increasingly influenced be Western cultures, it still remains one of the most amazing and controversial in the world.",
    }


  return (
    <>
       {/* НИЖЕ - КОМПОНЕНТ ДЛЯ COUNTRY PAGE */}
       <div className="cover">
        <div className="cover__text" >
          <h1 className="cover__title">{tempData.countryName}</h1>
          <hr/>
          <p className="cover__subtitle">{tempData.shortDescription}</p>
        </div>
      </div>
      <div className="main-content">

        <Widgets
        countryName={tempData.countryName}
        capitalName={tempData.capitalName}
        currency={tempData.currency}
        currencyCode={tempData.currencyCode}
        timeZone={tempData.timeZone}
        />


        <div className="country__text">
            <p className="country__article">{tempData.description}</p>
        </div> 

        <Video />

        <div className="country__places">
            <h1 className="country__heading">Places</h1>
            <p className="country__article">Галерея достопримечательностей</p>
        </div> 


        <Map
        geoCenter={tempData.geoCenter}
        countryCode={tempData.countryCode}
        />

      </div>
    </>
  )
};

export default CountryPage;
