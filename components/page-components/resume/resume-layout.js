import ResumeTimebar from './resume-timebar';
import ResumeContent from './resume-content';
import ResumeType from './resume-type';
import { useState } from 'react';
import ResumeYearTypeConnection from './resume-year-type';

const RESUME = {
  2022: { type: ['work', 'study'], title: 'PhD student', content: 'content' },
  2021: { type: ['work'], title: 'research assistant', content: 'content' },
  2021: { type: ['study'], title: 'MS DHDK', content: 'content' },
};

function ResumeLayout(props) {
  const [year, setYear] = useState(2022);
  const [type, setType] = useState('work');
  console.log('ciao', RESUME[2022]);

  return (
    <div className="fixed flex md:flex-row h-full p-14 pb-20">
      <ResumeTimebar
        data={Object.keys(RESUME)}
        year={year}
        yearHandler={setYear}
      />
      <svg className=" basis-3/5">
        <line x1="-2" y1="25" x2="100%" y2="230" stroke="black" />
      </svg>
      <ResumeType type={type} typeHandler={setType} />
      <ResumeContent />
    </div>
  );
}

export default ResumeLayout;
