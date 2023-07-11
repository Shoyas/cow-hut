import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();
/*
router.post(
  '/signup',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);
*/
router.patch(
  '/:id',
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser
);
router.get('/:id', UserController.getSingleUser);
router.delete('/:id', UserController.deleteUser);
router.get('/', UserController.getAllUsers);
export const UserRoutes = router;
