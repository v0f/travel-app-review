const { Schema, model } = require('mongoose');

const placeSchema = new Schema({
  countrySlug: String,
  slug: { type: String, unique: true },
  name: {
    en: String,
    ru: String,
    be: String,
  },
  imageUrl: String,
  description: {
    en: String,
    ru: String,
    be: String,
  },
});

const Place = model('Place', placeSchema);

module.exports = Place;
