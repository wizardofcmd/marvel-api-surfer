import SearchIcon from "./assets/search.svg";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4" role="main">
      <div className="flex flex-col items-center pt-1">
        <h1 className="text-5xl font-bold">Marvel Comics Search Tool</h1>
        <p className="text-neutral-500">
          Begin your journey by using the search input below.
        </p>
      </div>

      <div className="flex justify-center">
        {/* TODO: Use Material UI to import custom stylized components */}
        {/* TODO: Make entire app responsive on all screens */}
        {/* TODO: Implement Formik for search input */}
        <form className="flex justify-center w-full">
          <select
            className="appearance-none flex-initial lg:w-40 lg:h-10 px-1 mr-1
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
          </select>
          <input
            className="appearance-none px-1 focus:outline-none border border-slate-200 lg:h-10 lg:w-1/4"
            type="search"
            placeholder="Search"
            id="search-input"
            aria-label="Search input"
          />
          <button
            className="bg-sky-400 w-10 lg:h-10 flex-initial p-2"
            type="submit"
            id="submit-btn"
            aria-label="Search button"
          >
            <img
              src={SearchIcon}
              alt="Magnifying Glass Search Icon"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
