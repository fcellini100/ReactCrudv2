import { useFetchUserData } from '@/hooks';
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Spinner,
} from '@nextui-org/react';
import { User as UserIcon } from 'lucide-react';

export const Dashboard = () => {
  const { data: users, isLoading } = useFetchUserData();

  const userCount = users ? users.length : 0;
  return (
    <div className="container m-auto my-8">
      <h1 className="text-3xl font-semibold">Dasboard</h1>
      <Divider />

      <div className="m-auto my-4 flex gap-4 flex-wrap">
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <p className="text-center">
              <UserIcon />
            </p>
            <h4 className="font-semibold text-large">Total Users</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 text-center font-bold">
            {isLoading ? <Spinner size="sm" /> : userCount}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
