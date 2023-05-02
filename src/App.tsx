import { useState } from "react";
import Banner from "./components/Banner";
import Results from "./components/results/Results";

function App() {
  const [results, setResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("characters");

  return (
    <>
      <Banner
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setResults={setResults}
      />
      <Results category={selectedCategory} results={results} />
    </>
  );
}

export default App;
