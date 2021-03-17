import mongoose from 'mongoose';

interface IRating extends mongoose.Document {
  place: string;
  user: string;
  rating: number;
}

const RatingSchema = new mongoose.Schema({
  place: String, // slug
  user: String, // name || login
  rating: Number,
});

const Rating = mongoose.model<IRating>('Rating', RatingSchema);

export { Rating, IRating };
