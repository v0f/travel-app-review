import ICountry from './ICountry';

interface iDictObj {
  [key: string]: Array<string>;
}

export interface iDict {
  months: iDictObj;
  weekDay: iDictObj;
  search: {
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
  log: {
    [key: string]: string;
  };
  signup: {
    [key: string]: string;
  };
  email: {
    [key: string]: string;
  };
  pass: {
    [key: string]: string;
  };
  logSugg: {
    [key: string]: string;
  };
  signupSugg: {
    [key: string]: string;
  };
  weatherError: {
    [key: string]: string;
  }
  madeBy: {
    [key: string]: string;
  }
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
