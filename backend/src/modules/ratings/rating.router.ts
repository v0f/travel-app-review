import Router from 'express';
import wrap from '../../common/errors/async-error-wrapper';
import { Rating } from './rating.schema';
import checkAuth from '../../middleware/checkAuth';

const router = Router();

router.post('/', checkAuth, wrap(async (req, res) => {
  const user = res.locals.userLogin;
  const { place, rating } = req.body;
  const savedRating = await Rating.findOneAndReplace(
    {place, user}, {place, user, rating}, {new: true, upsert: true}
  ).exec();
  res.json(savedRating);
}));

router.get('/:place', wrap(async (req, res) => {
  const { place } = req.params;
  const ratings = await Rating.find({place}).lean().exec();
  res.json({
    users: ratings.map(({user, rating}) => ({[user]: rating})),
    rating: ratings.reduce((sum, rating) => sum + rating.rating, 0) / (ratings.length || 1),
  });
}));

export default router;
