import countryRepo from './country.repository';

const getAll = async (lang, search) => {
  const countries = await countryRepo.getAllByLang(lang, search);
  return countries;
};

const getOne = async (id, lang) => {
  const country = await countryRepo.getOneByLang(id, lang);
  return country;
};

const saveCountry = async (body) => countryRepo.saveCountry(body);

export default {
  getAll,
  getOne,
  saveCountry,
};
