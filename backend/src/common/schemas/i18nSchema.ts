import { Schema } from 'mongoose';

const i18nSchema = new Schema({
  en: String,
  ru: String,
  be: String,
});

export default i18nSchema;
