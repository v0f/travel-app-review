import mongoose from 'mongoose';

interface IRating extends mongoose.Document {
  place: string;
  user: string;
  userName: string;
  rating: number;
}

const RatingSchema = new mongoose.Schema({
  place: String, // slug
  user: String,
  userName: { type: String, default: '' },
  rating: Number,
});

const Rating = mongoose.model<IRating>('Rating', RatingSchema);

export { Rating, IRating };
