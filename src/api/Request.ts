import { API_URL } from "../constants/Constants";

const pub_key = import.meta.env.VITE_MARVEL_PUBLIC_KEY;

export async function fetchResults(category: string, query: string) {
  try {
    const response = await fetch(
      `${API_URL}${category}?nameStartsWith=${query}&apikey=${pub_key}`
    );
    const json = await response.json();
    return json || [];
  } catch (error: unknown) {
    throw new Error(`${error}`);
  }
}
