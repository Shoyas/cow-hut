import { IUserRoles } from './user.interface';

export const userRoles: IUserRoles[] = ['seller', 'buyer'];

export const userSearchableFields = ['name', 'role', 'phoneNumber'];

export const userFilterableFields = [
  'searchTerm',
  'name',
  'role',
  'phoneNumber',
];
