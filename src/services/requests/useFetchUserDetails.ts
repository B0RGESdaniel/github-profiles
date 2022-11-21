import { User } from '../../types/User';
import { useFetch } from './useFetch';

export const useFetchUserDetails = (user: string | undefined) => {
  return useFetch<User>(`users/${user}`);
};
