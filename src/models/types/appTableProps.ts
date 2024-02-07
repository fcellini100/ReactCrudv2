export type AppTableProps<T> = {
  data: T[];
  columns: AppTableColumn[];
  rowsPerPage: number;
  isLoading: boolean;
};

export type AppTableColumn = {
  label: string;
  key: string;
};
