import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;
  return <h2>{q} 영화 상세페이지</h2>;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
