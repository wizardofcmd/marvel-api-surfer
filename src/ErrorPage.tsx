import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import NotFoundImg from "./assets/not-found.png";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div
        id="error-page"
        className="relative flex h-screen w-screen flex-col items-center justify-center gap-2 p-2"
      >
        <img className="rounded-full shadow-2xl" src={NotFoundImg}></img>
        <h1 className="text-4xl font-black sm:text-6xl">404</h1>
        <h2 className="text-2xl font-medium sm:text-4xl">Page not found</h2>
        <p className="absolute inset-x-0 bottom-4 self-end text-center sm:text-xl">
          Go back, or click{" "}
          <Link className="font-bold text-cyan-600 decoration-solid" to="/">
            here
          </Link>{" "}
          to return to the search tool.
        </p>
      </div>
    );
  }

  return null;
}
