import BasicWindow from '../components/ui/windows/basic-window';
import HomeHero from '../components/page-components/home/home-hero';
import HomeBio from '../components/page-components/home/home-bio';

function Resume(props) {
  return (
    <BasicWindow
      title={'andrea-poltronieri/home'}
      width={'w-full'}
      height={'h-full'}
      animate={false}
    >
      <HomeHero />
      <HomeBio />
    </BasicWindow>
  );
}

export default Resume;
