import React from 'react';

interface CountryProps {
  countryId: string;
}

const CountryPage: React.FC<CountryProps> = ({ countryId }) => {


  return (
    <>
    <h1>Country Page {countryId}</h1>
    </>
  )
};

export default CountryPage;
