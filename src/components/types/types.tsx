export interface IProps {
  countryName?: string;
  capitalName?: string;
  shortDescription?: string;
  timeZone?: string;
}

export interface ICurrency {
  currency: string;
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
}
