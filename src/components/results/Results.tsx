import { ResultsProps } from "../../types/Types";
import { filterResults } from "../../utils/Utils";
import { ResultCard } from "./ResultCard";

export default function Results({ results }: ResultsProps) {
  if (Object.keys(results).length > 0) {
    const filteredResults = filterResults(results);

    if (filteredResults.length < 1) return null;

    return (
      <div
        className="inline-grid justify-items-center gap-y-10 py-4 sm:grid-cols-1 md:grid-cols-2 md:gap-y-4 lg:grid-cols-4 lg:gap-y-4"
        role="main"
      >
        {filteredResults.map((item) => (
          <ResultCard {...item} />
        ))}
      </div>
    );
  }

  return null;
}
