import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
// import { useRouter } from "next/router";
import fetchOneBook from "@/lib/fetch-one-book";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    // 대체, 예외사항에 대비하는 대비책이나 보험 느낌
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  // '!'를 붙여 undefined가 아닐것이라고 단언해 주어도 된다.
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));

  return {
    props: { book },
  };
};

export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!book) return "문제가 발생했습니다. 다시 시도하세요.";

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;
  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>

      <div className={style.description}>{description}</div>
    </div>
  );
}
