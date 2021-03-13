import React from 'react';
import CountriesCards from './CardsCountry/CountriesCards'
import './CountryPage.css'

const MainPage: React.FC = () => {

  /* ЗАПРОС СПИСКА ВСЕХ СТРАН И ГЕНЕРИРОВАНИЕ МАССИВА С ЭТИМИ ПОЛЯМИ
  (ОНИ НУЖНЫ ДЛЯ СОЗДАНИЯ КАРТОЧКИ)*/

  const tempData = [{
    imageURL: '//',
    id: 'japan',
    countryName: 'Japan',
    capitalName: 'Tokyo',
    shortDescription: 'The land of the rising sun. Consisting of more than 3000 islands. Rodiina sushi, geisha, robots, anime, minimalism and Mount Fuji',
  }]

  return (
    <>
      <CountriesCards
      dataCountries={tempData}
      // redirectCountryPage={redirectCountryPage}
      />
    </>
  );
};

export default MainPage;
