import PubbblicationsContent from './pubblications-content';

function PubblicationsLayout(props) {
  return (
    <div className="flex flex-col w-screen h-screen items-center pt-24 pb-60 overflow-scroll">
      <PubbblicationsContent pubblications={props.pubblications} />
    </div>
  );
}

export default PubblicationsLayout;
