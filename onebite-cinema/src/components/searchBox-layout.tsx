import style from "./searchBox-layout.module.css";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

export default function SearchBoxLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { q } = router.query;
  const [search, setSearch] = useState("");

  // 검색어 저장
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickButton = () => {
    if (!search) return;
    // 해당 검색결과로 넘기기
    router.push(`/search?q=${search}`);
  };

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  return (
    <div>
      <div>
        <input className={style.input} />
        <button
          className={style.button}
          placeholder="검색어를 입력하세요 ..."
          onChange={onChangeInput}
          onClick={onClickButton}
        >
          검색
        </button>
      </div>
      {children}
    </div>
  );
}
