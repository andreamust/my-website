import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';

function PubblicationsLayout(props) {
  const updateXarrow = useXarrow();
  return (
    <div>
      <Xwrapper>
        <div id="comp1" className="bg-red-300 w-12 h-12 ml-8"></div>
        <div id="comp2" className="bg-green-300 w-12 h-12 ml-80"></div>
        <Xarrow
          start={'comp1'}
          end={'comp2'}
          color={'black'}
          curveness={0}
          showHead={false}
          strokeWidth={2}
        />
      </Xwrapper>
    </div>
  );
}

export default PubblicationsLayout;
