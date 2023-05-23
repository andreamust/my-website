import { lazy, Suspense } from 'react';

const PubbblicationsContent = lazy(() => import('./pubblications-content'));
const renderLoader = () => <p>Loading</p>;

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
