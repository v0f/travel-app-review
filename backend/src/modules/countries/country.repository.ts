import Country from'./country.schema';
import { NotFoundError } from'../../common/errors/errors-list';
import { ENTITY_NAME } from './constants';

const saveCountry = async (body) => {
  const savedCountry = await Country.findOneAndReplace({slug: body.slug}, body, {new: true, upsert: true});
  return savedCountry;
};

const getAllByLang = async (lang, search) => {
  const countries = await Country.find({}).exec();
  const transform = (doc, docObj) => doc instanceof Country ? docObj : docObj[lang];
  const isMatch = (str: string) => str.toLowerCase().includes(search.toLowerCase());
  return countries
    .map(
      (country) => lang ? country.toObject({transform: transform}) : country.toObject()
    )
    .filter((country) => {
      if (!search) return true;
      const { countryName, capitalName } = country as { countryName: string, capitalName: string };
      return (isMatch(capitalName) || isMatch(countryName));
    })
  // if (lang) {
  //   return countries.map(
  //     (country) => country.toObject({
  //       transform: (doc, docObj) => doc instanceof Country ? docObj : docObj[lang]
  //     })
  //   );
  // }
  // return countries;
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

export default {
  getAllByLang,
  getOneByLang,
  saveCountry,
};
