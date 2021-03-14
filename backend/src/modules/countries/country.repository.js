const Country = require('./country.schema');
const { NotFoundError } = require('../../common/errors/errors-list');
const { ENTITY_NAME } = require('./constants');

const saveCountry = async (body) => {
  const savedCountry = await Country.findOneAndReplace({slug: body.slug}, body, {new: true, upsert: true});
  return savedCountry;
};

const getAllByLang = async (lang) => {
  const countries = await Country.find({}).exec();
  if (lang) {
    return countries.map(
      (country) => country.toObject({
        transform: (doc, docObj) => doc instanceof Country ? docObj : docObj[lang]
      })
    );
  }
  return countries;
};

const getOneByLang = async (id, lang) => {
  const country = await Country.findOne({slug: id}).exec();
  if (!country) throw new NotFoundError(ENTITY_NAME);
  if (lang) {
    return country.toObject({
      transform: (doc, docObj) => doc instanceof Country ? docObj : docObj[lang]
    });
  }
  return country;
};

module.exports = {
  getAllByLang,
  getOneByLang,
  saveCountry,
};
