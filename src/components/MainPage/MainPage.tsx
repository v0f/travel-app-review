import React from 'react';
import CountriesCards from './CardsCountry/CountriesCards'
import './CountryPage.css'

type Props = {
  children: Array<String>,
};

const MainPage: React.FC<Props> = (props: Props) => {
  console.log(props.children);

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
