import { ResultsProps } from "../../types/Types";
import { filterResults } from "../../utils/Utils";

export default function Results({ results }: ResultsProps) {
  filterResults(results);

  return (
    <div className="flex">
      <div></div>
    </div>
  );
}
