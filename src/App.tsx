function App() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4">
      <div className="flex flex-col items-center pt-1">
        <h1 className="text-5xl font-bold">Marvel Comics Search Tool</h1>
        <p className="text-neutral-500">
          Begin your journey by using the search input below.
        </p>
      </div>

      <div className="flex justify-center">
        <form className="flex">
          <select
            className="appearance-none"
            defaultValue="Characters"
            name="filter"
            id="filter"
          >
            <option value="characters">Characters</option>
            <option value="comics">Comics</option>
            <option value="events">Events</option>
            <option value="creators">Creators</option>
          </select>
          <label htmlFor="search-input"></label>
          <input
            className="appearance-none"
            type="search"
            placeholder="Search"
            id="search-input"
          />
          <button className="bg-sky-400" type="submit" id="submit-btn">
            <img src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
