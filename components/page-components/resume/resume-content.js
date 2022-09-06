import { useXarrow } from 'react-xarrows';

function ResumeContent(props) {
  const contents = props.data;

  const updateXarrow = useXarrow();
  return (
    <div
      className="relative flex flex-col gap-96 overflow-scroll no-scrollbar"
      onScroll={updateXarrow}
    >
      {contents.map((content, index) => {
        return (
          <div id={`content-${index}`} key={index} className="flex-1 ">
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default ResumeContent;
