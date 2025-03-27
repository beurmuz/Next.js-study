import style from "./searchable-layout.module.css";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const q = router.query.q;
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // 버튼 클릭 or 엔터키를 눌렀을 시 '/search?q=검색어'로 넘어가야 한다.
  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  // 엔터키를 눌렀을 때
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    <div>
      <div className={style.searchbox_container}>
        <input
          value={search}
          placeholder="검색어를 입력하세요 ..."
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
