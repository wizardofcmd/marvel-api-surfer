import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BannerProps } from "../types/Types";
import SearchForm from "./SearchForm";
import { fetchResults } from "../api/Request";

export default function Banner({
  selectedCategory,
  setResults,
  memoizedSetCategory,
}: BannerProps) {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      // Get the query parameters from the current URL
      const category = searchParams.get("category");
      const query = searchParams.get("query");

      if (category && query) {
        memoizedSetCategory(category);
        setQuery(query);

        const results = await fetchResults(category, query);
        setResults(results);
      }
    };

    fetchData();
  }, [searchParams, setResults, memoizedSetCategory]);

  function handleUserInput(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target.value;
    setQuery(target);
  }

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    memoizedSetCategory(value);
  }

  async function handleSearch(event: React.SyntheticEvent) {
    event.preventDefault();

    const prevCategory = searchParams.get("category");
    const prevQuery = searchParams.get("query");

    if (prevCategory === selectedCategory && prevQuery === query) return;
    if (!query) return;

    setSearchParams({ category: selectedCategory, query: query });

    const results = fetchResults(selectedCategory, query);
    setResults(await results);
  }

  return (
    <div className="flex flex-col gap-4 font-sans" role="banner">
      <div className="flex flex-col items-center pt-1">
        <h1 className="text-center font-bold max-[239px]:text-xl min-[240px]:text-3xl sm:text-5xl">
          Marvel Comics Search Tool
        </h1>
        <p className="mt-2 text-center text-neutral-500">
          Begin your journey by using the search input below.
        </p>
      </div>
      <SearchForm
        category={selectedCategory}
        value={query}
        handleSearch={handleSearch}
        handleUserInput={handleUserInput}
        handleSelectChange={handleSelectChange}
      />
    </div>
  );
}
