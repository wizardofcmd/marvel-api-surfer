import { ResultsProps } from "../../types/Types";
import { filterResults } from "../../utils/Utils";
import { ResultCard } from "./ResultCard";

export default function Results({ results }: ResultsProps) {
  if (Object.keys(results).length > 0) {
    const filteredResults = filterResults(results);
    console.log(filteredResults);
    
    if(filteredResults.length < 1) return null;

    return (
      <div className="grid">
        { filteredResults.map(item => <ResultCard {...item} />)}
      </div>
    );
  }

  return null;
}
