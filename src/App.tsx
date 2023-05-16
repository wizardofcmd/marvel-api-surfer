import { useState } from "react";
import Banner from "./components/Banner";
import Results from "./components/results/Results";
import ScrollButton from "./components/ScrollButton";

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
      {Object.keys(results).length > 0 && <ScrollButton></ScrollButton>}
    </>
  );
}

export default App;
