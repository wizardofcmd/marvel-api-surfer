const pubKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const apiUrl = "https://gateway.marvel.com/v1/public/";

const searchParams = new Map([
  ["characters", "nameStartsWith"],
  ["comics", "titleStartsWith"],
  ["creators", "nameStartsWith"],
  ["series", "titleStartsWith"],
  ["events", "nameStartsWith"],
]);

export async function fetchResults(category: string, query: string) {
  try {
    const defaultParam = searchParams.get(category);
    const response = await fetch(
      `${apiUrl}${category}?${defaultParam}=${query}&limit=100&apikey=${pubKey}`
    );
    const json = await response.json();
    return json || [];
  } catch (error: unknown) {
    throw new Error(`${error}`);
  }
}
