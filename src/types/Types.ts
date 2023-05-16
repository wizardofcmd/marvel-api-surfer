export type BannerProps = {
  selectedCategory: string;
  setResults: React.Dispatch<React.SetStateAction<never[]>>;
  memoizedSetCategory: (category: string) => void;
};

export type SearchFormProps = {
  category: string;
  value: string;
  handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (onSubmit: React.SyntheticEvent) => void;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type ResultsProps = {
  category: string;
  results: string[];
};

export type ResultProps = {
  id: number;
  header?: string;
  title?: string;
  description: string | undefined;
  image: string;
  link?: string;
};
