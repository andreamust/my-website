import ResumeContent from './resume-content';
import { useState, useEffect } from 'react';
import { parseData, getResumeSet } from '../../utils/filtering';
import useMobile from '../../utils/mobile';

function ResumeLayoutMobile(props) {
  const resume = props.resume;

  // get resume elements
  const resumeTypesList = getResumeSet(resume, 'type').sort().reverse();
  const resumeYearsList = getResumeSet(resume, 'yearStart').sort().reverse();

  return (
    <div className="flex flex-col items-center mt-5 sm:mt-10">
      <ResumeContent data={resume} year={0} type={'no'} />
    </div>
  );
}

export default ResumeLayoutMobile;
