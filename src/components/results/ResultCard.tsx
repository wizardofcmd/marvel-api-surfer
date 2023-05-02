import { ResultProps } from "../../types/Types";

export function ResultCard({ ...result }: ResultProps) {
  return (
    <div className="h-max w-5/6 rounded-lg pb-1 shadow">
      <div className="flex justify-center">
        <img
          className="rounded-t-lg"
          src={result.image}
          alt={`Image of ${result.header}`}
        ></img>
      </div>
      <div className="flex flex-col gap-y-1 p-2">
        <div>
          <h2 className="text-xl font-semibold md:text-2xl">{result.header}</h2>
        </div>
        {result.description ? (
          <div>
            <p className="italic">{result.description}</p>
          </div>
        ) : null}
        {result.link ? (
          <a className="self-end" href={result.link}>
            <button
              className="rounded-md bg-blue-700 p-1 px-2 font-semibold text-white"
              type="button"
            >
              Learn more
            </button>
          </a>
        ) : null}
      </div>
    </div>
  );
}
