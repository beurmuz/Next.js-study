import style from "./searchable-layout.module.css";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || ""); // q가 있으면 q를, 없으면 ""을 설정하도록 한다.
  }, [q]); // q가 변하면 검색어가 바뀌었다는 것

  // 검색어를 저장할 변수 선언
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 현재 사용자가 input tag에 입력하는 값을 실시간으로 search state에 보관하도록 설정한다.
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    // search값이 없거나 이미 q가 search와 같은 경우(즉, 같은 검색어를 입력한 경우) return으로 페이지를 이동시키지 않도록 한다.
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  // 키보드 입력이 발생했을 때 실행되는 함수
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 만약 현재 이벤트 키에 저장된 값이 엔터라면 onSubmit을 호출한다!
    if (e.key === "Enter") onSubmit();
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          value={search}
          onKeyDown={onKeyDown}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요 ..."
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
      {/* 페이지  컴포넌트를 렌더링*/}
    </div>
  );
}
