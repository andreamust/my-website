import Cite from 'citation-js';
import { MdZoomOutMap } from 'react-icons/md';
import { useRouter } from 'next/router';
import BasicWindow from '../../ui/windows/basic-window';
import Link from 'next/link';
import { Fragment } from 'react';
import PubblicationsModal from './pubblications-modal';

function PubblicationsContent(props) {
  const pubblications = props.pubblications.records;
  const router = useRouter();

  const renderCitation = (pubblication) => {
    const cite = new Cite(pubblication);
    const url = cite.data[0].URL;

    // remove url from data
    cite.data[0].URL = '';
    const output = cite.format('bibliography', {
      format: 'text',
      template: 'apa',
      lang: 'en-US',
    });
    return output;
  };

  return (
    <div className="flex flex-col items-center gap-10 w-7/12">
      {pubblications.reverse().map((pubblication) => {
        const cite = new Cite(pubblication);
        const url = cite.data[0].URL;
        // remove url from data
        cite.data[0].URL = '';
        const output = cite.format('bibliography', {
          format: 'text',
          template: 'apa',
          lang: 'en-US',
        });
        return (
          <div key={cite.data[0].id} className="flex flex-row gap-7">
            <Link href={'/pubblications/?pubblication=' + cite.data[0].id}>
              <a>
                <MdZoomOutMap className="w-6 h-6 fill-green-600 visited:fill-purple-400" />
              </a>
            </Link>
            <p>{output}</p>
          </div>
        );
      })}
      {router.query.pubblication && (
        <PubblicationsModal
          title={router.query.pubblication}
          content={'ciao ciao'}
          router={router}
        />
      )}
    </div>
  );
}

export default PubblicationsContent;
