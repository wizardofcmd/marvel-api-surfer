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
      <form onSubmit={handleSearch} className="flex w-full justify-center">
        <select
          className="mr-1 h-10 w-40 flex-initial appearance-none
  border-2 border-slate-200 bg-white bg-[url('./assets/down-chevron.svg')] bg-right
  bg-no-repeat bg-origin-padding px-1 focus:outline-none"
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
          className="h-10 w-1/4 appearance-none border-2 border-r-0 border-slate-200 px-1 focus:outline-none"
          type="search"
          placeholder="Search"
          id="search-input"
          aria-label="Search input"
          autoComplete="off"
          value={value}
          onChange={handleUserInput}
        />
        <button
          className="w-10 flex-initial bg-sky-400 p-2 hover:bg-sky-500 lg:h-10"
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
