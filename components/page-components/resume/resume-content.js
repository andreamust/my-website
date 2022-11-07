import { useXarrow } from 'react-xarrows';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ResumeContent(props) {
  const resume = props.data;

  const updateXarrow = useXarrow();
  return (
    <div
      className="relative flex flex-col gap-12 overflow-scroll no-scrollbar h-screen w-full p-14 pb-32"
      onScroll={updateXarrow}
    >
      {resume.map((resumeEntry, index) => {
        const { title, type, yearStart, yearEnd, company, content } =
          resumeEntry;
        return (
          <div
            id={`content-${index}`}
            key={index}
            className={`flex-1 pl-10 border-red-400 ${
              Array.from(props.year).includes(yearStart) &&
              props.type.some((t) => type.includes(t))
                ? 'border-2'
                : 'border-0'
            } '}`}
          >
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-4 justify-between">
                <h2 className=" text-xl font-modernBold">{title}</h2>
                <h5 className=" text-lg font-modernBold">
                  {yearStart} - {yearEnd}
                </h5>
              </div>
              <h3 className=" text-lg font-modernMono">{company}</h3>
            </div>
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
          </div>
        );
      })}
    </div>
  );
}

export default ResumeContent;
