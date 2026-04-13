import HomeHero from "../components/page-components/home/home-hero";
import HomeBio from "../components/page-components/home/home-bio";
import Head from "next/head";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <Head>
        <title>Andrea Poltronieri — MIR Researcher</title>
        <meta
          name="description"
          content="Andrea Poltronieri is a Music Information Retrieval researcher at the University of Bologna, working on computational musicology, semantic web, and AI."
        />
        <meta
          name="keywords"
          content="Andrea Poltronieri, music information retrieval, computational musicology, semantic web, ontology, machine learning, University of Bologna"
        />
        <link rel="canonical" href="https://andreapoltronieri.com" />
        <meta property="og:title" content="Andrea Poltronieri — MIR Researcher" />
        <meta
          property="og:description"
          content="Andrea Poltronieri is a Music Information Retrieval researcher at the University of Bologna, working on computational musicology, semantic web, and AI."
        />
        <meta property="og:url" content="https://andreapoltronieri.com" />
        <meta property="og:image" content="https://andreapoltronieri.com/images/ap.jpeg" />
        <meta name="twitter:title" content="Andrea Poltronieri — MIR Researcher" />
        <meta
          name="twitter:description"
          content="Andrea Poltronieri is a Music Information Retrieval researcher at the University of Bologna."
        />
        <meta name="twitter:image" content="https://andreapoltronieri.com/images/ap.jpeg" />
      </Head>
      <HomeHero>
        <HomeBio />
      </HomeHero>
    </Fragment>
  );
}

export default Home;
