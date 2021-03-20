import Router from 'express';
import wrap from '../../common/errors/async-error-wrapper';
import { Rating } from './rating.schema';
import checkAuth from '../../middleware/checkAuth';

const router = Router();

router.post('/', checkAuth, wrap(async (req, res) => {
  const user = res.locals.userLogin;
  const { userName, place, rating } = req.body;
  const savedRating = await Rating.findOneAndReplace(
    {place, user}, {place, user, userName, rating}, {new: true, upsert: true}
  ).exec();
  res.json(savedRating);
}));

router.get('/:place', wrap(async (req, res) => {
  const { place } = req.params;
  const ratings = await Rating.find({place}).lean().exec();
  res.json({
    // users: ratings.map(({user, rating}) => ({[user]: rating})),
    users: ratings.map(({user, userName, rating}) => ({user, userName, rating})),
    rating: ratings.reduce((sum, rating) => sum + rating.rating, 0) / (ratings.length || 1),
  });
}));

export default router;
