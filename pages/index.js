import BasicWindow from '../components/ui/windows/basic-window';
import HomeHero from '../components/page-components/home/home-hero';
import HomeBio from '../components/page-components/home/home-bio';
import Head from 'next/head';
import { Fragment } from 'react/cjs/react.production.min';

function Home() {
  return (
    <Fragment>
      <Head>
        <title>Andrea Poltronieri Website</title>
        <meta name="description" content="Andrea Poltronieri Website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Andrea Poltronieri Website" />
        <meta property="og:description" content="Andrea Poltronieri Website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://andreapoltronieri.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@andreapoltronieri" />
        <meta name="twitter:creator" content="@andreapoltronieri" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <HomeHero>
        <HomeBio />
      </HomeHero>
    </Fragment>
  );
}

export default Home;
