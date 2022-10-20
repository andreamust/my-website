import PubblicationsLayout from '../../components/page-components/pubblications/pubblications-layout';
import BasicWindow from '../../components/ui/windows/basic-window';

function Pubblications(props) {
  return (
    <BasicWindow
      title={'andrea-poltronieri/pubblications'}
      width={'50vw'}
      height={'70vh'}
      animate={false}
    >
      <PubblicationsLayout />
    </BasicWindow>
  );
}

export default Pubblications;
