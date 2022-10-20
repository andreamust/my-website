import { useXarrow } from 'react-xarrows';
import Latex from 'react-latex';

function ResumeContent(props) {
  const resume = props.data;

  const updateXarrow = useXarrow();
  return (
    <div
      className="relative flex flex-col gap-96 overflow-scroll no-scrollbar h-screen w-full p-14"
      onScroll={updateXarrow}
    >
      {resume.map((resumeEntry, index) => {
        console.log('resumeEntry', resumeEntry);
        const { title, type, yearStart, yearEnd, company, content } =
          resumeEntry;
        return (
          <div id={`content-${index}`} key={index} className="flex-1 pl-10">
            <div className="flex flex-row gap-4">
              <h2 className=" text-xl font-modernBold">{title}</h2>
              <h3 className=" text-lg font-modernMono">{company}</h3>
              <h5 className=" text-lg font-modernBold">
                {yearStart} - {yearEnd}
              </h5>
            </div>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ResumeContent;
