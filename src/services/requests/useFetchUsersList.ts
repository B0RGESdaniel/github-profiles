import { User } from '../../types/User';
import { useFetch } from './useFetch';

export const useFetchUsersList = () => {
  return useFetch<User[]>('users');
};
