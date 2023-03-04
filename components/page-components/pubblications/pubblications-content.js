import Cite from 'citation-js';
import { MdZoomOutMap } from 'react-icons/md';
import { useRouter } from 'next/router';

function PubblicationsContent(props) {
  const pubblications = props.pubblications.records;
  const router = useRouter();

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
            <button
              onClick={() => {
                router.push('pubblications/' + cite.data[0].id);
              }}
            >
              <MdZoomOutMap className="w-6 h-6 fill-green-600 visited:fill-purple-400" />
            </button>
            <p>{output}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PubblicationsContent;
