import Place from './place.schema';
import { NotFoundError } from '../../common/errors/errors-list';
import { ENTITY_NAME } from './constants';

const savePlace = async (body) => {
  const savedPlace = await Place.findOneAndReplace({slug: body.slug}, body, {new: true, upsert: true});
  return savedPlace;
};

const getAllByLang = async (country, lang) => {
  const query = country ? {countrySlug: country} : {};
  const places = await Place.find(query).exec();
  if (lang) {
    return places.map(
      (place) => place.toObject({
        transform: (doc, docObj) => doc instanceof Place ? docObj : docObj[lang]
      })
    );
  }
  return places;
};

const getOneByLang = async (slug, lang) => {
  const place = await Place.findOne({slug: slug}).exec();
  if (!place) throw new NotFoundError(ENTITY_NAME);
  if (lang) {
    return place.toObject({
      transform: (doc, docObj) => doc instanceof Place ? docObj : docObj[lang]
    });
  }
  return place;
};

export default {
  getAllByLang,
  savePlace,
  getOneByLang,
};
