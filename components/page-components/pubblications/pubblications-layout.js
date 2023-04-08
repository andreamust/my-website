import { lazy, Suspense } from 'react';

const PubbblicationsContent = lazy(() => import('./pubblications-content'));
const renderLoader = () => <p>Loading</p>;

function PubblicationsLayout(props) {
  return (
    <Suspense fallback={renderLoader()}>
      <div className="flex flex-col w-screen h-screen items-center pt-24 pb-60 overflow-scroll">
        <PubbblicationsContent pubblications={props.pubblications} />
      </div>
    </Suspense>
  );
}

export default PubblicationsLayout;
