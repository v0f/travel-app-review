const express = require('express');
const wrap = require('../../common/errors/async-error-wrapper');
const placeService = require('./place.service');
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
      const country = req.query.country || null;
      const data = await placeService.getAll(country, lang);
      res.send(data);
    })
  )
  .post(
    wrap(async (req, res) => {
      const savedPlace = await placeService.savePlace(req.body);
      res.json(savedPlace);
    })
  );

router.get(
  '/:slug',
  wrap(async (req, res) => {
    const lang = req.query.lang || DEFAULT_LANG;
    const { slug } = req.params;
    const data = await placeService.getOne(slug, lang);
    res.json(data);
  })
);

module.exports = router;
