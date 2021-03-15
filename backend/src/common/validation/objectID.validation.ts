import mongoose from 'mongoose';
import { BadRequestError } from '../errors/errors-list';

export default (id, resource) => {
  if (mongoose.Types.ObjectId.isValid(id)) {
    return true;
  }
  throw new BadRequestError(`invalid ${resource} ID. ID must be objectID`);
};
