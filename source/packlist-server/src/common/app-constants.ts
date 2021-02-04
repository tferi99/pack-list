import { User } from '../entities/User';

export const CURRENT_USER = User.create({
  id: 0,
  username: 'Admin',
  admin: true,
});
