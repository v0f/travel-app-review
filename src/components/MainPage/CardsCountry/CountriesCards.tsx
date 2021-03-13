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
      // dataCountries.map( country =>
          <Card
           key={dataCountries[0].id}
           countryName={dataCountries[0].countryName} //countryName={dataCountries[country.countryName].countryName[lang]}
           capitalName={dataCountries[0].capitalName} //capitalName={dataCountries[country.countryName].capitalName[lang]}
           shortDescription={dataCountries[0].shortDescription} //shortDescription={dataCountries[country.countryName].shortDescription[lang]}
           imageURL={dataCountries[0].imageURL}
          />
      //  )
    );
}

export default CountriesCards;