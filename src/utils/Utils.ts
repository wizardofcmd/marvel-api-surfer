import { Root } from "../interfaces/Interfaces";

export function filterResults(category: string, response: Object) {
  // TODO: Show tooltip when comics = 0 for Stories
  // TODO: Scroll to top on mobile

  // Characters: name, description (Might be empty), thumbnail and comiclink
  // Comics: title, description (Might be empty) OR textObjects, thumbnail and detail
  // Events: title, description, thumbnail and detail
  // Creators: fullName, thumbnail and detail
  // Stories: title, description, detail and comics (show tooltip when 0 to say API is dodgy)

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
