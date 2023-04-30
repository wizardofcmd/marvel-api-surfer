import { Data, Root } from "../interfaces/Interfaces";

export function filterResults(response: Object) {
  // Characters: Name, Description (Might be empty), Thumbnail and Marvel link
  const root = response as Root;
  const data = root.data as Data;
  const results = data.results;

  if (results.length < 1) return [];

  const filteredResults = results.map(
    ({ id, name, description, thumbnail, urls }) => {
      const comicLink = urls.find((url) => url.type === "comiclink")?.url ?? "";
      const image = `${thumbnail.path}.jpg`;

      return {
        id,
        name,
        description,
        image,
        comicLink,
      };
    }
  );
  return filteredResults;
}
