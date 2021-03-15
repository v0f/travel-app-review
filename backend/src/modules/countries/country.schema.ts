import { Schema, model } from 'mongoose';
import i18nSchema from '../../common/schemas/i18nSchema';

const countrySchema = new Schema({
  slug: { type: String, unique: true, lowercase: true },
  countryName: i18nSchema,
  capitalName: i18nSchema,
  shortDescription: i18nSchema,
  description: i18nSchema,
  currency: i18nSchema,
  geoCenter: [Number, Number],
  countryCode: String,
  timeZone: String,
  imageURL: String,
  videoURL: String,
});

const Country = model('Country', countrySchema);

export default Country;
