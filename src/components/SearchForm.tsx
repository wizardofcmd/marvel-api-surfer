import SearchIcon from "../assets/search.svg";
import { AppProps } from "../types/Types";

export default function SearchForm({ onSearchInput }: AppProps) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex justify-center w-full"
    >
      <select
        className="appearance-none flex-initial w-40 h-10 px-1 mr-1
  border border-slate-200 rounded bg-white focus:outline-none
  bg-[url('./assets/down-chevron.svg')] bg-right bg-origin-padding bg-no-repeat"
        defaultValue="Characters"
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
        className="appearance-none px-1 focus:outline-none border border-slate-200 lg:h-10 lg:w-1/4"
        type="search"
        placeholder="Search"
        id="search-input"
        aria-label="Search input"
        onChange={onSearchInput}
      />
      <button
        className="bg-sky-400 w-10 lg:h-10 flex-initial p-2"
        type="submit"
        id="submit-btn"
        aria-label="Search button"
      >
        <img src={SearchIcon} alt="Magnifying Glass Search Icon" />
      </button>
    </form>
  );
}
