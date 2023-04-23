import { API_URL } from "../constants/Constants";
import md5 from "blueimp-md5";

const pub_key = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const priv_key = import.meta.env.MARVEL_PRIVATE_KEY;

export async function fetchResults(category: string, query: string) {
  console.log(pub_key, priv_key);
  const timestamp = new Date().getTime();
  const hash = md5(timestamp + pub_key + priv_key);

  try {
    const response = await fetch(
      `${API_URL}${category}?nameStartsWith=${query}&apikey=${pub_key}&hash=${hash}`
    );
    const json = await response.json();
    return json.items || [];
  } catch (error: unknown) {
    throw new Error(`${error}`);
  }
}
