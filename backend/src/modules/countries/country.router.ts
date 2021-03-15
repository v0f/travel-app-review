import express from 'express';
import wrap from '../../common/errors/async-error-wrapper';
import countryService from './country.service';
// const validateId = require('../../common/validation/objectID.validation');
import { DEFAULT_LANG } from '../../common/config';
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

export default router;
