import ResumeTimebar from './resume-timebar';
import ResumeContent from './resume-content';
import ResumeType from './resume-type';
import { useState } from 'react';

function getResumeSet(data, type) {
  let set = new Set();
  let abc = [];
  if (data.map((d) => typeof d.type)[0] === 'object' && type === 'type') {
    data.map((d) => set.add(...d.type));
  } else {
    data.map((d) => set.add(d[type]));
  }
  return Array.from(set);
}

function ResumeLayout(props) {
  const resumeTypesList = getResumeSet(props.resume, 'type');
  const resumeYearsList = getResumeSet(props.resume, 'yearStart');
  const resumeContents = props.resume.map((c) => c.content);

  console.log(resumeTypesList);

  const [year, setYear] = useState(resumeYearsList[0]);
  const [type, setType] = useState(resumeTypesList[0]);

  let timebarPositions = [];
  return (
    <div className="fixed flex md:flex-row h-full p-14 pb-20 gap-48 w-screen">
      <ResumeTimebar
        data={Array.from(resumeYearsList).sort().reverse()}
        year={year}
        yearHandler={setYear}
        positions={timebarPositions}
      />
      <ResumeType data={resumeTypesList} type={type} typeHandler={setType} />
      <ResumeContent data={resumeContents} />
    </div>
  );
}

export default ResumeLayout;
