import BasicWindow from '../../components/ui/windows/basic-window';
import fs from 'fs/promises';
import path from 'path';
import PageTitle from '../../components/ui/layout/page-title';
import dynamic from 'next/dynamic';

const PubblicationsLayout = dynamic(
  () =>
    import(
      '../../components/page-components/pubblications/pubblications-layout'
    ),
  {
    ssr: false,
  }
);

function Pubblications(props) {
  const pubblications = props;
  return (
    <BasicWindow
      title={'andrea-poltronieri/pubblications'}
      width={'50vw'}
      height={'70vh'}
      animate={false}
    >
      <PageTitle title={'Pubblications'} />
      <PubblicationsLayout pubblications={pubblications} />
    </BasicWindow>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'pubblications.json');
  const pubblicationData = await fs.readFile(filePath);
  const data = JSON.parse(pubblicationData);
  return { props: { records: data } };
}

export default Pubblications;
