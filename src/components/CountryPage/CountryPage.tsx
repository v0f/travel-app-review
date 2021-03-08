import React from 'react';

interface CountryProps {
  countryId: string;
}

const CountryPage: React.FC<CountryProps> = ({ countryId }) => <h1>Country Page {countryId}</h1>;

export default CountryPage;
