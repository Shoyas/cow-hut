import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from '../users/user.controller';
import { UserValidation } from '../users/user.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);

export const AuthRoutes = router;
