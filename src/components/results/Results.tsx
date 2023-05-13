import { ResultsProps } from "../../types/Types";
import { filterResults } from "../../utils/Utils";
import { ResultCard } from "./ResultCard";
import NoResultsImg from "../../assets/no-results.jpg";

export default function Results({ category, results }: ResultsProps) {
  if (Object.keys(results).length > 0) {
    const filteredResults = filterResults(category, results);

    if (filteredResults.length < 1)
      return (
        <div className="relative mx-auto flex rounded-lg shadow-xl sm:static sm:mt-2 sm:max-w-max sm:items-center sm:justify-center sm:px-3">
          <img src={NoResultsImg}></img>
          <p className="absolute right-0 top-10 w-1/2 text-sm max-[240px]:hidden sm:static sm:text-base">
            Oops! No results found for your search.
          </p>
        </div>
      );

    return (
      <div
        className="inline-grid justify-items-center gap-y-10 py-4 sm:grid-cols-1 md:grid-cols-2 md:gap-y-4 lg:grid-cols-4 lg:gap-y-4"
        role="main"
      >
        {filteredResults.map((item) => (
          <ResultCard key={item.id} {...item} />
        ))}
      </div>
    );
  }

  return null;
}
