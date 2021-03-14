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
}

export interface ICountryData {
  name: string;
}

export interface ISearch {
  countries: Array<string>;
  updateCountries: (list: Array<string>) => void;
}


