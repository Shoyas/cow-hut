import status from 'http-status';
import { Schema, model } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import {
  cowBreeds,
  cowCategories,
  cowLabels,
  cowLocations,
} from './cow.constant';
import { CowModel, ICow } from './cow.interface';

const cowSchema = new Schema<ICow>(
  {
    name: {
      type: String,
      required: true,
      //   unique: true,
    },
    age: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
      enum: cowLocations,
    },
    breed: {
      type: String,
      required: true,
      enum: cowBreeds,
    },
    weight: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
      enum: cowLabels,
    },
    category: {
      type: String,
      required: true,
      enum: cowCategories,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

cowSchema.pre('save', async function (next) {
  const isExist = await Cow.findOne({ name: this.name, age: this.age });
  if (isExist) {
    throw new ApiError(
      status.CONFLICT,
      'This cow is already exist our database!'
    );
  }
  next();
});

export const Cow = model<ICow, CowModel>('Cow', cowSchema);
