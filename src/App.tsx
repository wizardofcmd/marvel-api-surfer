import { useState } from "react";
import Banner from "./components/Banner";
import Results from "./components/results/Results";

function App() {
  const [results, setResults] = useState([]);

  return (
    <>
      <Banner setResults={setResults} />
      <Results results={results} />
    </>
  );
}

export default App;
