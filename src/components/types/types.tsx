export interface IProps {
    countryName?: string;
    capitalName?: string;
    shortDescription?: string;
    timeZone?: string;
   }

   export interface ICurrency {
    currency: string;
   }

   export interface ICapital {
    capitalName: string;
   }

   export interface IWidgets {
    countryName: string;
    capitalName: string;
    timeZone: string;
    currency: string;

   }

   export interface ICountryData {
       name: string,

   }

   export interface ISearch {
    countries: Array<string>,
    updateCountries: (list: Array<string>) => void
  }