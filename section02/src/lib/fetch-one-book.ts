import { BookData } from "@/types";

// return값은 BookData이거나 null값이다. (유니언타입 이용))
export default async function fetchOneBook(
  id: number
): Promise<BookData | null> {
  const url = `http://localhost:12345/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();

    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
