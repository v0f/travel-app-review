const { Schema, model } = require('mongoose');

const countrySchema = new Schema({
  slug: { type: String, unique: true, lowercase: true },
  countryName: {
    en: String,
    ru: String,
    be: String,
  },
  capitalName: {
    en: String,
    ru: String,
    be: String,
  },
  shortDescription: {
    en: String,
    ru: String,
    be: String,
  },
  description: {
    en: String,
    ru: String,
    be: String,
  },
  currency: {
    en: String,
    ru: String,
    be: String,
  },
  geoCenter: [Number, Number],
  countryCode: String,
  timeZone: String,
  imageURL: String,
  videoURL: String,
});

const Country = model('Country', countrySchema);

module.exports = Country;
