import ICountry from './ICountry';

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
  places: {
    [key: string]: string;
  };
  limit: {
    [key: string]: string;
  };
  search: {
    [key: string]: string;
  };
}

export interface ICountryData {
  name: string;
}

export interface ISearch {
  countries: Array<ICountry>;
  updateCountries: (list: Array<ICountry>) => void;
}

export interface IApiSearch {
  setSearchQuery: (newState: string) => void;
}
