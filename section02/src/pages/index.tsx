import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";

// SSR 방식으로 사전 렌더링이 진행됨
// 컴포넌트보다 먼저 실행되어 컴포넌트에 필요한 데이터를 불러오는 함수
export const getServerSideProps = () => {
  const data = "hello";
  console.log("브라우저에서는 출력되지 않아요. 서버에서만 실행되기 때문이죠.");

  // 받아온 데이터를 Property로 이렇게 객체로 넣어주어
  // 해당 데이터를 Home 컴포넌트에게 전달하도록 설정해줄 수 있다.
  // 해당 리턴 값은 항상 반드시, props라는 객체 프로퍼티를 포함하는 단 하나의 객체여야만 한다.
  return {
    props: {
      data,
    },
  };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);

  useEffect(() => {
    console.log(window);
  });

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

// 별도의 메서드를 추가해놓는다.
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
