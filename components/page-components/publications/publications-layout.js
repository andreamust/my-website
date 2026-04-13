import { lazy, Suspense } from 'react';
import Spinner from '../../utils/spinner';

const PublicationsContent = lazy(() => import('./publications-content'));
const renderLoader = () => <Spinner />;

function PublicationsLayout(props) {
  return (
    <Suspense fallback={renderLoader()}>
      <div className="flex flex-col items-center pt-20 pb-32">
        <PublicationsContent publications={props.publications} />
      </div>
    </Suspense>
  );
}

export default PublicationsLayout;
