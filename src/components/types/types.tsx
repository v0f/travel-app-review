export interface IProps {
  countryName?: string;
  id?: string;
  capitalName?: string;
  shortDescription?: string;
  timeZone?: string;
  imageURL?: string;
}

export interface ICurrency {
  currency: string;
  currencyCode: string;
}

interface iDictObj {
  [key: string]: Array<string>;
}

export interface iDict {
  months: iDictObj;
  weekDay: iDictObj;
  lang: {
    [key: string]: string;
  };
  capital: {
    [key: string]: string;
  };
  // currencyCode: string;
}

export interface ICapital {
  capitalName: string;
}

export interface IWidgets {
  countryName: string;
  capitalName: string;
  timeZone: string;
  currency: string;
  currencyCode: string;
}

export interface ICountryData {
  name: string;
}

export interface ISearch {
  countries: Array<string>;
  updateCountries: (list: Array<string>) => void;
}

export interface IMap {
  geoCenter: Array<number>;
  countryCode: string;
}
