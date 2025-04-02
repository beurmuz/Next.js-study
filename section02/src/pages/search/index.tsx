import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
// import { GetStaticPathsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import { BookData } from "@/types";

// SSG
// export const getStaticProps = async (context: GetStaticPathsContext) => {
//   const q = context.query.q;
//   const books = await fetchBooks(q as string);

//   return {
//     props: {
//       books,
//     },
//   };
// };

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  // 비동기 함수 생성
  const fetchSearchResult = async () => {
    // querystring의 q에 담긴 값을 기반으로 검색 결과 데이터를 불러오면 된다.
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      // 검색어가 변경 되었을 때, 현재 검색어가 있다면 데이터를 불러온다.
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
