import BasicWindow from '../../ui/windows/basic-window';
import renderCitation from '../../utils/process-pubblications';
import { useState } from 'react';
import useMobile from '../../utils/mobile';

function PubblicationsModal(props) {
  const mobile = useMobile();
  const [copySuccess, setCopySuccess] = useState('');
  console.log(mobile);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(citation).then(
      () => {
        setCopySuccess('Copied!');
      },
      () => {
        setCopySuccess('Failed to copy!');
      }
    );
  };
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
      title={content.id}
      width="w-[70%]"
      height="h-[70%]"
      animate={true}
      closePath="/pubblications/"
      onClose={() => {
        router.push('/pubblications/');
      }}
    >
      <div className="flex flex-col gap-5 w-full p-12 overflow-scroll scroll-smooth no-scrollbar">
        <h1 className="text-2xl font-modernBold dark:text-blackpalette-900 underline decoration-wavy decoration-lime decoration-4 underline-offset-4">
          {content.title}
        </h1>
        <h3 className="text-xl font-modernBold">Authors</h3>
        <p className="text-md font-modern dark:text-blackpalette-900">
          {authorList.join(', ')}
        </p>
        <h3 className="text-xl font-modernBold">Published in</h3>
        <p className="text-md font-modern italic dark:text-blackpalette-900">
          {content['container-title']
            ? content['container-title']
            : 'To be published'}
        </p>
        {authorList[0] == 'Poltronieri Andrea' ? (
          ''
        ) : (
          <>
            <h3 className="text-xl font-modernBold">Note</h3>
            <p className="text-md font-modern dark:text-blackpalette-900">
              Alphabetical order
            </p>
          </>
        )}
        <h3 className="text-xl font-modernBold">Abstract</h3>
        <p className="text-md font-modern dark:text-blackpalette-900">
          {content.abstract}
        </p>
        <h3 className="text-xl font-modernBold">Link</h3>
        <button
          className="text-lg bg-cerise active:bg-lime text-whitepalette active:text-blackpalette-900 font-bold py-2 px-4 rounded"
          onClick={() => window.open(content.URL)}
        >
          Go to pubblication
        </button>
        <h3 className="text-xl font-modernBold">Cite</h3>
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-4 items-center">
            <button
              className="text-lg bg-lime hover:bg-cerise hover:text-whitepalette dark:text-blackpalette-900 font-bold py-2 px-4 rounded"
              onClick={() => setCitation(generateCitation('bibliography'))}
            >
              APA
            </button>
            <button
              className="text-lg bg-lime hover:bg-cerise hover:text-whitepalette dark:text-blackpalette-900 font-bold py-2 px-4 rounded"
              onClick={() => setCitation(generateCitation('bibtex'))}
            >
              BibTex
            </button>
            <button
              className="text-lg bg-lime hover:bg-cerise hover:text-whitepalette dark:text-blackpalette-900 font-bold py-2 px-4 rounded"
              onClick={() => setCitation(generateCitation('ris'))}
            >
              RIS
            </button>
            <button
              className="text-lg bg-lime hover:bg-cerise hover:text-whitepalette dark:text-blackpalette-900 font-bold py-2 px-4 rounded"
              onClick={() => setCitation(generateCitation('ndjson'))}
            >
              NDJSON
            </button>
          </div>
          <div className="flex justify-between items-center">
            {citation && (
              <button
                className="text-lg bg-greypalette-600 dark:bg-whitepalette hover:text-cerise dark:text-blackpalette-900 font-bold py-2 px-4 rounded ml-50"
                onClick={copyToClipboard}
              >
                {copySuccess ? copySuccess : 'Copy'}
              </button>
            )}
          </div>
        </div>
        <p className="text-md font-modern dark:text-blackpalette-900">
          {citation}
        </p>
      </div>
    </BasicWindow>
  );
}

export default PubblicationsModal;
