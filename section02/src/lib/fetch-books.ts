import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = "http://localhost:12345/book";

  // 검색어가 전달되었다면, 검색 결과를 불러오는 api를 호출한다.
  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
