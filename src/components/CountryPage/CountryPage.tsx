import React, { useState, useEffect } from 'react';
import Widgets from './Widgets/Widgets';
import Map from './Map/Map';
import Video from './Video/Video';
import Gallery from './Gallery/Gallery';
import LangContext from '../Language-context/LangContext';
import ICountry from '../types/ICountry';
import IPlace from '../types/IPlace';
import { API_URL } from '../constants';

import './CountryPage.scss';

interface CountryProps {
  id: string;
}

const CountryPage: React.FC<CountryProps> = ({ id }) => {
  const { lang } = React.useContext(LangContext);

  const [countryData, setCountryData] = useState<ICountry>({} as ICountry);
  const [places, setPlaces] = useState<IPlace[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/countries/${id}?lang=${lang}`)
      .then((data) => data.json())
      .then((countryResult) => {
        setCountryData(countryResult);
      })
      .catch();
    fetch(`${API_URL}/places?country=${id}&lang=${lang}`)
      .then((data) => data.json())
      .then((placesResult) => {
        setPlaces(placesResult);
      })
      .catch();
  }, [lang, id]);

  return (
    <React.Fragment>
      <div className='cover' style={{ backgroundImage: `url(${countryData.imageURL})` }}>
        <div className='cover__text'>
          <h2 className='cover__title'>{countryData.countryName}</h2>
          <hr />
          <p className='cover__subtitle'>{countryData.shortDescription}</p>
        </div>
      </div>
      <div className='main-content'>
        <Widgets
          capitalName={countryData.capitalName}
          capitalNameEN={countryData.capitalNameEN}
          currency={countryData.currency}
          currencyCode={countryData.currencyCode}
          timeZone={countryData.timeZone}
        />

        <div className='country__text'>
          <p className='country__article'>{countryData.description}</p>
        </div>

        <Video videoURL={countryData.videoURL || ''} videoPoster={countryData.videoPoster || ''} />

        <Gallery places={places} />

        <Map geoCenter={countryData.geoCenter || [0, 0]} countryCode={countryData.countryCode} />
      </div>
    </React.Fragment>
  );
};

export default CountryPage;
