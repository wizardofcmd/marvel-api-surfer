import { useState } from "react";
import SearchForm from "./SearchForm";
import { fetchResults } from "../api/Request";

export default function Banner() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("characters");

  function handleUserInput(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target.value;
    setQuery(target);
  }

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const category = event.target.value;
    setSelectedCategory(category);
  }

  function handleSearch(event: React.SyntheticEvent) {
    event.preventDefault();
    if (!query) return;

    fetchResults(selectedCategory, query);
  }

  return (
    <div
      className="flex h-screen w-screen flex-col gap-4 font-lato"
      role="banner"
    >
      <div className="flex flex-col items-center pt-1">
        <h1 className="text-5xl font-bold">Marvel Comics Search Tool</h1>
        <p className="text-neutral-500">
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
