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

   export interface IMap {
    geoCenter: Array<number>;
    countryCode: string;   
   }