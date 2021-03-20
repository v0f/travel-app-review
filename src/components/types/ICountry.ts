export default interface ICountry {
  slug: string;
  countryName: string;
  capitalName: string;
  capitalNameEN: string;
  shortDescription: string;
  description: string;
  currency: string;
  geoCenter: [number, number];
  countryCode: string;
  currencyCode: string;
  timeZone: string;
  imageURL?: string;
  videoURL?: string;
  videoPoster?: string;
}
