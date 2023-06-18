import { z } from 'zod';
import {
  cowBreeds,
  cowCategories,
  cowLabels,
  cowLocations,
} from './cow.constant';

const createCowZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    age: z.string({
      required_error: 'Age is required',
    }),
    price: z.number({
      required_error: 'Price is required',
    }),
    location: z.enum([...cowLocations] as [string, ...string[]], {
      required_error: 'Location is required',
    }),
    breed: z.enum([...cowBreeds] as [string, ...string[]], {
      required_error: 'Breed is required',
    }),
    weight: z.string({
      required_error: 'Weight is required',
    }),
    label: z.enum([...cowLabels] as [string, ...string[]], {
      required_error: 'Breed is required',
    }),
    category: z.enum([...cowCategories] as [string, ...string[]], {
      required_error: 'Breed is required',
    }),
    seller: z.string().optional(),
  }),
});

const updateCowZodSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
      })
      .optional(),
    age: z
      .string({
        required_error: 'Age is required',
      })
      .optional(),
    price: z
      .number({
        required_error: 'Price is required',
      })
      .optional(),
    location: z
      .enum([...cowLocations] as [string, ...string[]], {
        required_error: 'Location is required',
      })
      .optional(),
    breed: z
      .enum([...cowBreeds] as [string, ...string[]], {
        required_error: 'Breed is required',
      })
      .optional(),
    weight: z
      .string({
        required_error: 'Weight is required',
      })
      .optional(),
    label: z
      .enum([...cowLabels] as [string, ...string[]], {
        required_error: 'Breed is required',
      })
      .optional(),
    category: z
      .enum([...cowCategories] as [string, ...string[]], {
        required_error: 'Breed is required',
      })
      .optional(),
    seller: z.string().optional(),
  }),
});

export const CowValidation = {
  createCowZodSchema,
  updateCowZodSchema,
};
