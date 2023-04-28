import { ResultProps } from "../../types/Types";

export function ResultCard({ ...result }: ResultProps) {
  return (
    <div className="max-h-min w-5/6 rounded-lg shadow">
      <div>
        <img
          className="rounded-t-lg"
          src={result.image}
          alt={`Image of ${result.name}`}
        ></img>
      </div>
      <div className="p-2">
        <div>
          <h2 className="font-semibold">{result.name}</h2>
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
    </div>
  );
}
