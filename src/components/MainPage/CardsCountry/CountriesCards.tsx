//import CommunicationStayCurrentLandscape from 'material-ui/svg-icons/communication/stay-current-landscape';
import React from 'react';
import Card from './CardCountry';

import { IProps } from '../../types/types';

interface ICountriesCards {
  dataCountries: Array<IProps>;
}

const CountriesCards = ({ dataCountries } : ICountriesCards ) =>  {

// ПЕРЕБОР МАССИВА С КАРТОЧКАМИ И ВОЗВРАЩЕНИЕ 8 КАРТОЧЕК

    return (
      <> { 
      dataCountries.map( country =>
          <Card
           key={country.id}
           countryName={country.countryName} //countryName={dataCountries[country.countryName].countryName[lang]}
           capitalName={country.capitalName} //capitalName={dataCountries[country.countryName].capitalName[lang]}
           shortDescription={country.shortDescription} //shortDescription={dataCountries[country.countryName].shortDescription[lang]}
           imageURL={country.imageURL}
          />
       ) }
       </>
    );
}

export default CountriesCards;