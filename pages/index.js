import BasicWindow from '../components/ui/windows/basic-window';
import HomeHero from '../components/page-components/home/home-hero';
import HomeBio from '../components/page-components/home/home-bio';
import Head from 'next/head';
import { Fragment } from 'react/cjs/react.production.min';

function Home() {
  return (
    <Fragment>
      <HomeHero>
        <HomeBio />
      </HomeHero>
    </Fragment>
  );
}

export default Home;
