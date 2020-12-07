import Head from "next/head";
import Title from "../components/Title";
import LinkAbout from "../components/LinkAbout";

function Home() {
  return (
    <div className="Title" id="Title">
      <Head>
        <title>Fritzzin's Homepage</title>
      </Head>

      <Title />
      <LinkAbout />
    </div>
  );
}

export default Home;
