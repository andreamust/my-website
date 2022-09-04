import ResumeTimebar from './resume-timebar';
import ResumeContent from './resume-content';
import ResumeType from './resume-type';
import { useState, useCallback, useRef, useEffect } from 'react';
import ResumeYearTypeConnection from './resume-year-type';

const RESUME = {
  2022: { type: ['work', 'study'], title: 'PhD student', content: 'content' },
  2021: { type: ['work'], title: 'research assistant', content: 'content' },
  2021: { type: ['study'], title: 'MS DHDK', content: 'content' },
};

function ResumeLayout(props) {
  const [year, setYear] = useState(2022);
  const [type, setType] = useState('work');
  const ref = useRef(null);

  //<svg className="basis-3/5">
  //<line x1="-2" y1="25" x2="100%" y2="230" stroke="black" />
  //</svg>
  let timebarPositions = [];

  return (
    <div className="fixed flex md:flex-row h-full p-14 pb-20 gap-48 w-screen">
      <ResumeTimebar
        data={Object.keys(RESUME)}
        year={year}
        yearHandler={setYear}
        positions={timebarPositions}
      />
      <ResumeType type={type} typeHandler={setType} />
      <ResumeContent />
    </div>
  );
}

export default ResumeLayout;
