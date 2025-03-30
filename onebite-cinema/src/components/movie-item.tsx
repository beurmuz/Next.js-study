import Link from "next/link";
import style from "./movie-item.module.css";
import type { MovieData } from "@/types";

export default function MovieItem({
  id,
  title,
  subTitle,
  description,
  releaseDate,
  company,
  genres,
  runtime,
  posterImgUrl,
}: MovieData) {
  return (
    <Link className={style.container} href={`/movie/${id}`}>
      <img src={posterImgUrl} />
    </Link>
  );
}
