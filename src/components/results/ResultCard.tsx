import { ResultProps } from "../../types/Types";

export function ResultCard({ ...result }: ResultProps) {
  return (
    <div className="max-h-min w-1/5">
      <div>
        <img src={result.image} alt={`Image of ${result.name}`}></img>
      </div>
      <div>
        <h2>{result.name}</h2>
      </div>
      {result.description ? (
        <div>
          <p>{result.description}</p>
        </div>
      ) : null}
      {result.detail ? (
        <a href={result.detail}>
          <button type="button">Learn more</button>
        </a>
      ) : null}
    </div>
  );
}
