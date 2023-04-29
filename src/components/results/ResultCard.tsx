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
      <div className="p-2 flex flex-col gap-y-1">
        <div>
          <h2 className="text-xl font-semibold md:text-2xl">{result.name}</h2>
        </div>
        {result.description ? (
          <div>
            <p className="italic">{result.description}</p>
          </div>
        ) : null}
        {result.detail ? (
          <a className="self-end" href={result.detail}>
            <button className="bg-blue-700 p-1 px-2 my-2 rounded-md text-white" type="button">
              Learn more
            </button>
          </a>
        ) : null}
      </div>
    </div>
  );
}
