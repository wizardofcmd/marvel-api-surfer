const pubKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const apiUrl = "https://gateway.marvel.com/v1/public/";

export async function fetchResults(category: string, query: string) {
  try {
    const response = await fetch(
      `${apiUrl}${category}?nameStartsWith=${query}&apikey=${pubKey}`
    );
    const json = await response.json();
    return json || [];
  } catch (error: unknown) {
    throw new Error(`${error}`);
  }
}
