import PubblicationsLayout from '../../components/page-components/pubblications/pubblications-layout';
import BasicWindow from '../../components/ui/windows/basic-window';
import fs from 'fs/promises';
import path from 'path';

function Pubblications(props) {
  const pubblications = props;
  return (
    <BasicWindow
      title={'andrea-poltronieri/pubblications'}
      width={'50vw'}
      height={'70vh'}
      animate={false}
    >
      <div className="bg-inherit bg-slate-400 bg-opacity-30">
        <h1 className="font-modernMono text-4xl leading-[3.8rem] text-left pl-9 pt-3 mb-3 bg-opacity-30">
          Pubblications
        </h1>
      </div>
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
