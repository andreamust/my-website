import BasicWindow from '../../ui/windows/basic-window';
import renderCitation from '../../utils/process-pubblications';
import { useState } from 'react';

function PubblicationsModal(props) {
  const { content, router } = props;
  const authorList = content.author.map(
    (author) => author.family + ' ' + author.given
  );

  const generateCitation = (format) => {
    setCitation('');
    const { output } = renderCitation(content, format);
    return output;
  };

  let [citation, setCitation] = useState();

  return (
    <BasicWindow
      width="w-[70%]"
      height="h-[60%]"
      animate={true}
      closePath="/pubblications/"
      onClose={() => {
        router.push('/pubblications/');
      }}
    >
      <div className="flex flex-col gap-5 w-full p-12 overflow-scroll scroll-smooth no-scrollbar">
        <h1 className="text-2xl font-modernBold">{content.title}</h1>
        <h3 className="text-xl font-modernBold">Authors</h3>
        <p className="text-md font-modern">{authorList.join(', ')}</p>
        <h3 className="text-xl font-modernBold">Published in</h3>
        <p className="text-md font-modern italic">
          {content['container-title']
            ? content['container-title']
            : 'To be published'}
        </p>
        <h3 className="text-xl font-modernBold">Abstract</h3>
        <p className="text-md font-modern">{content.abstract}</p>
        <h3 className="text-xl font-modernBold">Cite</h3>
        <div className="flex flex-row gap-7 items-center">
          <button
            className="text-lg bg-purple-600 hover:bg-purple-800 active:bg-green-400 hover:text-white font-bold py-2 px-4 rounded"
            onClick={() => setCitation(generateCitation('bibliography'))}
          >
            APA
          </button>
          <button
            className="text-lg bg-purple-600 hover:bg-purple-800 active:bg-green-400 hover:text-white font-bold py-2 px-4 rounded"
            onClick={() => setCitation(generateCitation('bibtex'))}
          >
            BibTex
          </button>
          <button
            className="text-lg bg-purple-600 hover:bg-purple-800 active:bg-green-400 hover:text-white font-bold py-2 px-4 rounded"
            onClick={() => setCitation(generateCitation('ris'))}
          >
            RIS
          </button>
          <button
            className="text-lg bg-purple-600 hover:bg-purple-800 active:bg-green-400 hover:text-white font-bold py-2 px-4 rounded"
            onClick={() => setCitation(generateCitation('ndjson'))}
          >
            NDJSON
          </button>
        </div>
        <p className="text-md font-modern">{citation}</p>
      </div>
    </BasicWindow>
  );
}

export default PubblicationsModal;
