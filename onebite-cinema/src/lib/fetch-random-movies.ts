import { MovieData } from "@/types";

export default async function fetchRandomMoives(): Promise<MovieData[]> {
  const url = "http://localhost:12345/movie/random";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();

    return response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
