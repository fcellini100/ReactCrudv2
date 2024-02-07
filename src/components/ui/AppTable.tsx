import { AppTableProps, WithId } from '@/models/types';
import {
  Spinner,
  Pagination,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Table,
} from '@nextui-org/react';
import { useState, useMemo } from 'react';

export const AppTable = <T extends WithId>({
  data,
  columns,
  rowsPerPage,
  isLoading,
}: AppTableProps<T>) => {
  const [page, setPage] = useState(1);

  const pages = Math.ceil(data ? data.length / rowsPerPage : 0);

  const items = useMemo(() => {
    if (!data) {
      return [];
    }

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  }, [page, data]);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center my-8">
        <Spinner
          size="lg"
          label="Fetching data..."
          color="primary"
          labelColor="foreground"
        />
      </div>
    );
  }

  return (
    <Table
      aria-label="Table showing data"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={page => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: 'min-h-[222px]',
      }}
    >
      <TableHeader columns={columns}>
        {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={items} emptyContent={'No rows to display.'}>
        {item => (
          <TableRow key={item.id}>
            {columnKey => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
