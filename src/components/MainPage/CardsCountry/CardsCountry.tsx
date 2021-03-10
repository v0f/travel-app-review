//import CommunicationStayCurrentLandscape from 'material-ui/svg-icons/communication/stay-current-landscape';
import React from 'react';
import CardCountry from './CardCountry';

import { IProps } from '../../types/types';


// const getData = () => { 
//     // const response = await fetch(url);
//     // const data = await response.json();
//     // return data;

//     return require('../../../data/data-countries.json');
// }

export default function CardsCountry({ countryName, capitalName, shortDescription } : IProps ) {

    return (
        //dataCountries.map( country =>
          <CardCountry
           //country={(dataCountries['japan'].countryName['en']).toLowerCase()}
        //    countryName={dataCountries['japan'].countryName['en']}
        //    capitalName={dataCountries['japan'].capitalName['en']}
        //    shortDescription={dataCountries['japan'].shortDescription['en']}

           countryName={countryName}
           capitalName={capitalName}
           shortDescription={shortDescription}
          />
      // )
    );
}