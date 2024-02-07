import { User } from '@/models/types';
import { useQuery } from '@tanstack/react-query';

const usersUrl = 'https://65c22129f7e6ea59682ab070.mockapi.io/api/v1/users';

const fetchUsers = async () => {
  const response = await fetch(usersUrl);
  return (await response.json()) as User[];
};

export const useFetchUserData = () => {
  return useQuery<User[]>({
    queryKey: ['fetchUsers'],
    queryFn: fetchUsers,
  });
};
