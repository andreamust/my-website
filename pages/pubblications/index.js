import fs from 'fs/promises';
import path from 'path';
import PageTitle from '../../components/ui/layout/page-title';
import dynamic from 'next/dynamic';
import { Fragment } from 'react/cjs/react.production.min';

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
    <Fragment>
      <PageTitle title={'Pubblications'} />
      <PubblicationsLayout pubblications={pubblications} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'pubblications.json');
  const pubblicationData = await fs.readFile(filePath);
  const data = JSON.parse(pubblicationData);
  return { props: { records: data } };
}

export default Pubblications;
