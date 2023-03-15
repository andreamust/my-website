import BasicWindow from '../components/ui/windows/basic-window';
import HomeHero from '../components/page-components/home/home-hero';
import HomeBio from '../components/page-components/home/home-bio';
import Head from 'next/head';
import { Fragment } from 'react/cjs/react.production.min';

function Home() {
  return (
    <Fragment>
      <BasicWindow
        title={'andrea-poltronieri/home'}
        width={'w-full'}
        height={'h-full'}
        animate={false}
      >
        <HomeHero>
          <HomeBio />
        </HomeHero>
      </BasicWindow>
    </Fragment>
  );
}

export default Home;
