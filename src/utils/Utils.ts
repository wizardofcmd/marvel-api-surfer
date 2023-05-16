import { Root } from "../interfaces/Interfaces";

export function filterResults(category: string, response: Object) {
  const results = (response as Root).data.results;

  if (results.length < 1) return [];

  const filteredResults = results.map(
    ({ id, thumbnail, description, ...dynamicData }) => {
      const header =
        dynamicData?.name || dynamicData.title || dynamicData.fullName;
      const link =
        dynamicData?.urls.find(
          (url) => url.type === "comiclink" || url.type === "detail"
        )?.url ?? "";
      const image = `${thumbnail.path}.jpg`;

      if (!description && category === "comics") {
        description = dynamicData.textObject?.text;
      }

      return {
        id,
        header,
        description,
        image,
        link,
      };
    }
  );
  return filteredResults;
}
