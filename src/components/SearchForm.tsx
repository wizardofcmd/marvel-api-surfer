import SearchIcon from "../assets/search.svg";
import { SearchFormProps } from "../types/Types";

export default function SearchForm({
  category,
  value,
  handleSelectChange,
  handleUserInput,
  handleSearch,
}: SearchFormProps) {
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSearch}
        className="flex w-full flex-col flex-wrap justify-center gap-2 px-2 sm:flex-row sm:flex-nowrap sm:gap-0"
      >
        <select
          className="flex-grow-1 h-10 appearance-none border-2 border-slate-200 bg-white bg-[url('./assets/down-chevron.svg')]
  bg-right bg-no-repeat bg-origin-padding px-1 focus:outline-none
  sm:mr-1 sm:w-40 sm:min-w-[150px] sm:flex-none"
          value={category}
          onChange={handleSelectChange}
          name="category"
          id="category"
          aria-label="Dropdown menu for selecting categories to search by"
        >
          <option value="characters">Characters</option>
          <option value="comics">Comics</option>
          <option value="events">Events</option>
          <option value="creators">Creators</option>
          <option value="series">Series</option>
          <option value="stories">Stories</option>
        </select>
        <input
          className="h-10 appearance-none border-2 sm:w-[400px] border-slate-200 px-1 focus:outline-none sm:flex-initial sm:border-r-0"
          type="search"
          placeholder="Search"
          id="search-input"
          aria-label="Search input"
          autoComplete="off"
          value={value}
          onChange={handleUserInput}
        />
        <button
          className="relative hidden h-10 w-10 bg-sky-400 p-2 hover:bg-sky-500 sm:block"
          type="submit"
          id="submit-btn"
          aria-label="Search button"
        >
          <img src={SearchIcon} alt="Magnifying Glass Search Icon" />
        </button>
      </form>
    </div>
  );
}
