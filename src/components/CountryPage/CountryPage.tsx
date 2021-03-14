import React from 'react';
import Widgets from '../CountryPage/Widgets/Widgets';
import Map from '../CountryPage/Map';
import Video from './Video';

import './CountryPage.css';

const data = require('../../data/data-countries.json');
interface CountryProps {
  id: string;
}

const CountryPage: React.FC<CountryProps> = ({ id }) => {

  const lang = 'en';

  return (
    <React.Fragment>
      <div
      className='cover'
      style={{ backgroundImage:`url(${data[id].imageURL})` }}
      >
        <div className='cover__text'>
          <h1 className='cover__title'>{data[id].countryName[lang]}</h1>
          <hr />
          <p className='cover__subtitle'>{data[id].shortDescription[lang]}</p>
        </div>
      </div>
      <div className='main-content'>
        <Widgets
          countryName={data[id].countryName[lang]}
          capitalName={data[id].capitalName[lang]}
          currency={data[id].currency[lang]}
          currencyCode={data[id].currencyCode}
          timeZone={data[id].timeZone}
        />

        <div className='country__text'>
          <p className='country__article'>{data[id].description[lang]}</p>
        </div>

        <Video videoURL={data[id].videoURL}/>

        <div className='country__places'>
          <h1 className='country__heading'>Places</h1>
          <p className='country__article'>Галерея достопримечательностей</p>
        </div>

        <Map geoCenter={data[id].geoCenter} countryCode={data[id].countryCode} />
      </div>
    </React.Fragment>
  );
};

export default CountryPage;
