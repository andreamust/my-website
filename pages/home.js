import BasicWindow from '../components/ui/windows/basic-window';
import HomeHero from '../components/page-components/home/home-hero';

function Resume(props) {
  return (
    <BasicWindow
      title={'andrea-poltronieri/home'}
      width={'w-full'}
      height={'h-full'}
      animate={false}
    >
      <HomeHero />
    </BasicWindow>
  );
}

export default Resume;
