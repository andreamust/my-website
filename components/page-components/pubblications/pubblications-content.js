import { MdZoomOutMap } from 'react-icons/md';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PubblicationsModal from './pubblications-modal';
import { Fragment } from 'react';
import renderCitation from '../../utils/process-pubblications';

function PubblicationsContent(props) {
  const pubblications = props.pubblications.records;
  const router = useRouter();

  const findOpenPubblication = () => {
    const pubblication = pubblications.find(
      (pubblication) => pubblication.id === router.query.pubblication
    );
    return pubblication;
  };

  const loadedYears = [];

  return (
    <div className="flex flex-col items-center gap-10 w-7/12">
      {pubblications.reverse().map((pubblication) => {
        let { output, data } = renderCitation(pubblication, 'bibliography');
        const year = data.issued['date-parts'][0][0];
        const title = data.title;
        const url = data.URL;
        // string pre-processing
        const splitCitation = output.split('Poltronieri, A.');
        const splitTitle = splitCitation[1].split(title);
        return (
          <Fragment key={data.id}>
            {loadedYears.includes(year)
              ? ''
              : loadedYears.push(year) && (
                  <h2 className="text-2xl font-bold">{year}</h2>
                )}
            <div className="flex flex-row gap-7 items-center">
              <Link href={'/pubblications/?pubblication=' + data.id}>
                <a>
                  <MdZoomOutMap className="w-6 h-6 fill-green-600 visited:fill-purple-400" />
                </a>
              </Link>
              <p className="font-modern">
                {splitCitation[0]}
                <span className=" font-modernBold text-green-600">
                  {' '}
                  Poltronieri, Andrea
                </span>
                {splitTitle[0]}
                <span className=" font-modernBold"> {title}</span>
                {splitTitle[1]}
              </p>
            </div>
          </Fragment>
        );
      })}
      {router.query.pubblication && (
        <PubblicationsModal content={findOpenPubblication()} router={router} />
      )}
    </div>
  );
}

export default PubblicationsContent;
