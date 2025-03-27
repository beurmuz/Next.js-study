import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  return <h1>{q} 영화 상세페이지</h1>;
}
