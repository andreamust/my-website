import { lazy, Suspense } from 'react';
import Spinner from '../../utils/spinner';

const PubbblicationsContent = lazy(() => import('./pubblications-content'));
const renderLoader = () => <Spinner />;

function PubblicationsLayout(props) {
  return (
    <Suspense fallback={renderLoader()}>
      <div className="flex flex-col items-center pt-20 pb-32">
        <PubbblicationsContent pubblications={props.pubblications} />
      </div>
    </Suspense>
  );
}

export default PubblicationsLayout;
