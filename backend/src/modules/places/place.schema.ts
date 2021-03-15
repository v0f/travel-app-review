import { Schema, model } from 'mongoose';
import i18nSchema from '../../common/schemas/i18nSchema';

const placeSchema = new Schema({
  countrySlug: {type: String, lowercase: true},
  slug: { type: String, unique: true, lowercase: true },
  name: i18nSchema,
  imageURL: String,
  description: i18nSchema,
});

const Place = model('Place', placeSchema);

export default Place;
