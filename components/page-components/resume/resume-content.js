import { useXarrow } from 'react-xarrows';
import ReactMarkdown from 'react-markdown';

function ResumeContent(props) {
  const resume = props.data;

  const updateXarrow = useXarrow();
  return (
    <div
      className="relative flex flex-col gap-12 overflow-y-scroll no-scrollbar h-screen w-full pl-14 pr-14 pb-32 pt-24"
      onScroll={updateXarrow}
    >
      {resume.map((resumeEntry, index) => {
        const { title, type, yearStart, yearEnd, company, content } =
          resumeEntry;
        return (
          <div
            id={`content-${index}`}
            key={index}
            className={`relative overflow-visible flex-1 pl-10 border-cerise ${
              Array.from(props.year).includes(yearStart) &&
              props.type.some((t) => type.includes(t))
                ? 'border-2'
                : 'border-0'
            }`}
          >
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-4 justify-between">
                <h2 className="text-xl font-modernBold mt-4 max-w-md">
                  {title}
                </h2>
                <h5 className="text-lg font-modernBold mr-5 mt-4">
                  {yearStart} - {yearEnd}
                </h5>
              </div>
              <h3 className=" text-lg font-modernMono">{company}</h3>
            </div>
            <ReactMarkdown className="pt-3 mr-5 mb-4">{content}</ReactMarkdown>
          </div>
        );
      })}
    </div>
  );
}

export default ResumeContent;
