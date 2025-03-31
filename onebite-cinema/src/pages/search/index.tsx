import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import MovieItem from "@/components/movie-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchMovies from "@/lib/fetch-movies";

// SSR
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;
  const movies = await fetchMovies(q as string);

  return {
    props: { movies },
  };
};

export default function Page({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const q = router.query.q as string;

  return (
    <div className={style.container}>
      {movies
        .filter((movie) => movie.title.includes(q))
        .map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
