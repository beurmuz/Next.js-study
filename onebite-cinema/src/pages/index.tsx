import SearchableLayout from "@/components/searchable-layout";
import Head from "next/head";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>onebite cinema</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
