import ResumeTimebar from './resume-timebar';
import ResumeContent from './resume-content';
import ResumeType from './resume-type';
import { Fragment, useState } from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';

function getResumeSet(data, type) {
  let set = new Set();
  if (data.map((d) => typeof d.type)[0] === 'object' && type === 'type') {
    data.map((d) => set.add(...d.type));
  } else {
    data.map((d) => set.add(d[type]));
  }
  return Array.from(set);
}

function ResumeLayout(props) {
  // get resume elements
  const resumeTypesList = getResumeSet(props.resume, 'type');
  const resumeYearsList = getResumeSet(props.resume, 'yearStart');
  const resumeContents = props.resume.map((c) => c.content);

  // initialize state variables
  const [year, setYear] = useState(resumeYearsList[0]);
  const [type, setType] = useState(resumeTypesList[0]);

  let timebarPositions = [];

  // update arrowws on dom changes
  const updateXarrow = useXarrow();

  return (
    <div className="fixed flex md:flex-row h-full p-14 pb-20 gap-48 w-screen">
      <Xwrapper>
        <ResumeTimebar
          data={resumeYearsList.sort().reverse()}
          year={year}
          yearHandler={setYear}
          positions={timebarPositions}
        />
        <ResumeType
          data={resumeTypesList.sort().reverse()}
          type={type}
          typeHandler={setType}
        />
        <ResumeContent data={resumeContents} />
        {resumeYearsList.map((year, yearIndex) => {
          return resumeTypesList.map((type, typeIndex) => {
            return (
              <Xarrow
                key={`${year}-${type}`}
                start={`year-${yearIndex}`}
                end={`type-${typeIndex}`}
                color={`black`}
                curveness={0}
                showHead={false}
                strokeWidth={1.4}
                startAnchor={'right'}
                endAnchor={'left'}
              />
            );
          });
        })}
      </Xwrapper>
    </div>
  );
}

export default ResumeLayout;
