import { BookData } from "@/types";

// 해당 fetch함수는 여러 개의 도서 데이터를 비동기로 반환한다.
export default async function fetchRandomBooks(): Promise<BookData[]> {
  const url = "http://localhost:12345/book/random";

  try {
    // api를 요청해서 그 응답을 받아온다.
    const response = await fetch(url);
    if (!response.ok) throw new Error();

    return await response.json();
  } 
  catch (err) {
    console.error(err);
    return [];
  }
}
