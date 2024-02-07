import { AppTable } from '@/components/ui';
import { useFetchUserData } from '@/hooks';
import { User } from '@/models/types';

const columns = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'country',
    label: 'Country',
  },
];

export const UserList = () => {
  const { data: users, error, isLoading } = useFetchUserData();

  if (error) {
    return (
      <div className="container m-auto my-8">
        <p className="text-center font-semibold text-red-500">
          There was an error fetching the data. Please contact the
          administrators.
        </p>
      </div>
    );
  }

  return (
    <div className="container m-auto my-8">
      <h1 className="text-3xl font-semibold">Users</h1>
      <AppTable<User>
        data={users ?? []}
        columns={columns}
        isLoading={isLoading}
        rowsPerPage={10}
      />
      ;
    </div>
  );
};
