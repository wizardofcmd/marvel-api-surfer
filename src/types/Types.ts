export type BannerProps = {
  setResults: React.Dispatch<React.SetStateAction<never[]>>;
};

export type SearchFormProps = {
  category: string;
  value: string;
  handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (onSubmit: React.SyntheticEvent) => void;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type ResultsProps = {
  results: string[];
};

export type ResultProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  comicLink: string;
};
