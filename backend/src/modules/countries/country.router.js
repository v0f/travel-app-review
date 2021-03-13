const express = require('express');
const wrap = require('../../common/errors/async-error-wrapper');
const countryService = require('./country.service');
// const validateId = require('../../common/validation/objectID.validation');
const { DEFAULT_LANG } = require('../../common/config');
// const { ENTITY_NAME } = require('./constants');

const router = express.Router();

// router.param(
//   'id',
//   wrap(async (req, res, next) => {
//     const { id } = req.params;
//     validateId(id, ENTITY_NAME);
//     next();
//   })
// );

router.route('/')
  .get(
    wrap(async (req, res) => {
      const lang = req.query.lang || DEFAULT_LANG;
      const data = await countryService.getAll(lang);
      res.send(data);
    })
  )
  .post(
    wrap(async (req, res) => {
      const savedCountry = await countryService.saveCountry(req.body);
      res.json(savedCountry);
    })
  );

router.get(
  '/:slug',
  wrap(async (req, res) => {
    const lang = req.query.lang || DEFAULT_LANG;
    const { slug } = req.params;
    const data = await countryService.getOne(slug, lang);
    res.json(data);
  })
);

module.exports = router;
