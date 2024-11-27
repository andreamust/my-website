import { useXarrow } from "react-xarrows";
import ReactMarkdown from "react-markdown";

function ResumeContent(props) {
  const resume = props.data;

  const updateXarrow = useXarrow();
  return (
    <div
      className="relative flex flex-col gap-6 overflow-y-scroll no-scrollbar h-screen w-full pl-4 pr-4 pb-20 pt-16 sm:pl-14 sm:pr-14 sm:gap-12 sm:pb-32 sm:pt-24"
      onScroll={updateXarrow}
    >
      {resume.map((resumeEntry, index) => {
        const { title, type, yearStart, yearEnd, company, content } =
          resumeEntry;
        const isLastEntry = index === resume.length - 1;
        return (
          <div
            id={`content-${index}`}
            key={index}
            className={`relative overflow-visible flex-1 p-4 border-cerise rounded-lg shadow-md sm:p-6 ${
              isLastEntry ? "mb-20" : ""
            } ${
              Array.from(props.year).includes(yearStart) &&
              props.type.some((t) => type.includes(t))
                ? "border-2"
                : "border-0"
            }`}
          >
            {/* Header Section */}
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 sm:justify-between items-start">
              {/* Title */}
              <h2 className="text-lg font-bold text-gray-900 leading-snug sm:text-xl sm:max-w-lg">
                {title}
              </h2>

              {/* Boxes: Year */}
              <div className="flex flex-row gap-2">
                {/* Year Box */}
                <div className="bg-lime text-gray-900 font-modernMono text-xs font-semibold px-2 py-1 rounded-md whitespace-nowrap sm:text-sm sm:px-4 sm:py-1.5">
                  {yearStart} - {yearEnd || "Present"}
                </div>

                {/* Type Box (Mobile Only) */}
                <div className="block sm:hidden font-modernMono bg-cerise text-white text-xs font-semibold px-2 py-1 rounded-md">
                  {type.join(", ")}
                </div>
              </div>
            </div>

            {/* Company */}
            <h3 className="text-sm text-lime-600 italic mt-2 sm:text-lg">
              {company}
            </h3>

            {/* Content */}
            <ReactMarkdown className="text-sm pt-3 leading-relaxed sm:text-base sm:leading-6 font-modern">
              {content}
            </ReactMarkdown>
          </div>
        );
      })}
    </div>
  );
}

export default ResumeContent;
