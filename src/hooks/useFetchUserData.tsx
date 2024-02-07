import { User } from '@/models/types';
import { useQuery } from '@tanstack/react-query';

const usersUrl = 'https://65c22129f7e6ea59682ab070.mockapi.io/api/v1/users';

const fetchUsers = async () => {
  const response = await fetch(usersUrl);
  return (await response.json()) as User[];
};

const queryConfig = {
  queryKey: ['fetchUsers'],
  queryFn: fetchUsers,
  staleTime: 1000 * 60 * 5, // 5 minutes
};

export const useFetchUserData = () => {
  return useQuery<User[]>(queryConfig);
};
