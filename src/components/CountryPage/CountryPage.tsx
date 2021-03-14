import React from 'react';
import Widgets from './Widgets/Widgets';
import Map from './Map';
import Video from './Video';
import Gallery from './Gallery';
import LangContext from '../Language-context/LangContext';

import './CountryPage.css';

const data = require('../../data/data-countries.json');

interface CountryProps {
  id: string;
}

const CountryPage: React.FC<CountryProps> = ({ id }) => {
  const { lang } = React.useContext(LangContext);

  return (
    <React.Fragment>
      <div className='cover' style={{ backgroundImage: `url(${data[id].imageURL})` }}>
        <div className='cover__text'>
          <h1 className='cover__title'>{data[id].countryName[lang]}</h1>
          <hr />
          <p className='cover__subtitle'>{data[id].shortDescription[lang]}</p>
        </div>
      </div>
      <div className='main-content'>
        <Widgets
          capitalName={data[id].capitalName[lang]}
          capitalNameEN={data[id].capitalName['en']}
          currency={data[id].currency[lang]}
          currencyCode={data[id].currencyCode}
          timeZone={data[id].timeZone}
        />

        <div className='country__text'>
          <p className='country__article'>{data[id].description[lang]}</p>
        </div>

        <Video videoURL={data[id].videoURL} />

        <Gallery
        places={data[id].places}
        />

        <Map geoCenter={data[id].geoCenter} countryCode={data[id].countryCode} />
      </div>
    </React.Fragment>
  );
};

export default CountryPage;
