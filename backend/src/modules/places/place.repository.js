const Place = require('./place.schema');
// const { NotFoundError } = require('../../common/errors/errors-list');

const savePlace = async (body) => {
  const savedPlace = await Place.findOneAndReplace({slug: body.slug}, body, {new: true, upsert: true});
  return savedPlace;
};

const getAllByLang = async (country/*lang*/) => {
  const query = country ? {countrySlug: country} : {};
  return await Place.find(query).exec();
};

const getOneByLang = async (slug/*lang*/) => {
  return await Place.findOne({slug: slug}).exec();
};

module.exports = {
  getAllByLang,
  savePlace,
  getOneByLang,
};
