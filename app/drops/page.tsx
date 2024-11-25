import ProjectList from "@/components/projects";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="flex flex-col gap-4 items-center bg-black">
        <ProjectList />
      </main>
    </>
  );
};

export default Home;