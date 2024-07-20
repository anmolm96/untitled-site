import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <div className="mx-auto max-w-6xl py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="sm:align-center sm:flex sm:flex-col">
            <h1 className="text-center text-4xl font-extrabold sm:text-6xl">
              &#34;UNTITLED VENTURES&#34;
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
