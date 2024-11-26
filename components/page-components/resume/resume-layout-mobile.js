import ResumeContent from "./resume-content";
import { getResumeSet } from "../../utils/filtering";

function ResumeLayoutMobile(props) {
  const resume = props.resume;

  // get resume elements
  const resumeTypesList = getResumeSet(resume, "type").sort().reverse();
  const resumeYearsList = getResumeSet(resume, "yearStart").sort().reverse();

  return (
    <div className="flex flex-col items-center mt-5 sm:mt-10">
      <ResumeContent data={resume} year={0} type={"no"} />
    </div>
  );
}

export default ResumeLayoutMobile;
