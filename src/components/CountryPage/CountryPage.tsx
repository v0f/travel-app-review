import React from 'react';

interface CountryProps {
  countryId: string;
}

const CountryPage: React.FC<CountryProps> = ({ countryId }) => {


  return (
    <>
    <h1>Country Page {countryId}</h1>
      {/* <h1>{data['japan'].countryName['en']}</h1>
      <h2>{data['japan'].capitalName['en']}</h2>
      <img src={`./assets/images/countries/japan/japan.jpg`}/>
      <p>{data['japan'].description['en']}</p> */}
    </>
  )
};

export default CountryPage;
