const { Schema } = require('mongoose');

const i18nSchema = new Schema({
  en: String,
  ru: String,
  be: String,
});

module.exports = i18nSchema;
