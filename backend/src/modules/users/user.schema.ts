import mongoose from 'mongoose';

interface IUser extends mongoose.Document {
  login: string;
  password: string;
  name: string,
  avatarUrl: string,
  token: string,
  tokenExpire: number,
}

const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  avatarUrl: String,
  token: String,
  tokenExpire: Number,
});

UserSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.password;
    return ret;
  }
});

const User = mongoose.model<IUser>('User', UserSchema);

export { User, IUser };
