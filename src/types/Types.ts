export type AppProps = {
  category: string;
  value: string;
  handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (onSubmit: React.SyntheticEvent) => void;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
