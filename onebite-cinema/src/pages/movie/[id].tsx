import { useRouter } from "next/router";
import style from "./[id].module.css";
import movies from "@/mock/movies.json";

export default function Page() {
  const router = useRouter();
  const id = router.query.id;

  const nowMovie = movies.find((movie) => movie.id === Number(id));
  if (!nowMovie) return <div>영화 정보를 불러올 수 없습니다. </div>;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img}
        style={{ backgroundImage: `url('${nowMovie.posterImgUrl}')` }}
      >
        <img src={nowMovie.posterImgUrl} />
      </div>
      <div className={style.title}>{nowMovie.title}</div>
      <div>
        {nowMovie.releaseDate} / {nowMovie.genres.join(", ")} /{" "}
        {nowMovie.runtime}분
      </div>
      <div>{nowMovie.company}</div>
      <div className={style.subTitle}>{nowMovie.subTitle}</div>
      <div className={style.description}>{nowMovie.description}</div>
    </div>
  );
}
