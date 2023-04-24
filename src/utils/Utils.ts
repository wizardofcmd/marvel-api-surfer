import { Data, Root } from "../interfaces/Interfaces";

export function filterResults(response: Object) {
  // Characters: Name, Description (Might be empty), Thumbnail and Marvel link
  const root = response as Root;
  const data = root.data as Data;
  const results = data.results;

  const filteredResults = results.map(
    ({ name, description, thumbnail, urls }) => {
      const detail = urls.find((url) => url.type === "detail")?.url ?? "";
      const image = thumbnail.path;

      return {
        name,
        description,
        image,
        detail,
      };
    }
  );
  return filteredResults;
}
