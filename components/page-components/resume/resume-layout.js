import ResumeTimebar from './resume-timebar';
import ResumeContent from './resume-content';
import ResumeType from './resume-type';
import { Fragment, useState } from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';

function getResumeSet(data, type) {
  let list = [];
  if (data.map((d) => typeof d.type)[0] === 'object' && type === 'type') {
    data.map((d) => list.push(...d.type));
  } else {
    data.map((d) => list.push(d[type]));
  }
  return [...new Set(list)];
}

function filterResumeData(data, type, value) {
  return data.filter((d) => d[type].toString().includes(value.toString()));
}

function parseTypes(data, type, value, targetValue) {
  const filteredResume = filterResumeData(data, type, value);
  return getResumeSet(filteredResume, targetValue);
}

function ResumeLayout(props) {
  const resume = props.resume;
  // get resume elements
  const resumeTypesList = getResumeSet(resume, 'type');
  const resumeYearsList = getResumeSet(resume, 'yearStart');
  const resumeContents = resume.map((c) => c.content);

  // initialize state variables
  let [year, setYear] = useState(resumeYearsList[0]);
  let [type, setType] = useState();
  //type === undefined && year === undefined
  //? resumeYearsList[0]
  //: parseTypes(resume, 'type', type, 'yearStart');
  type = parseTypes(resume, 'yearStart', year, 'type');

  return (
    <div className="absolute flex md:flex-row h-full p-14 pb-20 gap-48 w-screen">
      <Xwrapper>
        <div className="flex flex-row gap-52">
          <ResumeTimebar
            data={resumeYearsList.sort().reverse()}
            year={year}
            yearHandler={setYear}
          />
          <ResumeType
            data={resumeTypesList.sort().reverse()}
            type={type}
            typeHandler={setType}
          />
        </div>
        <ResumeContent data={resumeContents} />
        {resumeYearsList.map((yearArrow) => {
          return resumeTypesList.map((typeArrow) => {
            return (
              <Xarrow
                key={`${yearArrow}-${typeArrow}`}
                start={`year-${yearArrow}`}
                end={`type-${typeArrow}`}
                color={
                  year.toString().includes(yearArrow.toString()) &&
                  type.includes(typeArrow)
                    ? 'red'
                    : 'black'
                }
                curveness={0}
                showHead={false}
                strokeWidth={
                  year.toString().includes(yearArrow.toString()) &&
                  type.includes(typeArrow)
                    ? 1.9
                    : 1.4
                }
                startAnchor={'right'}
                endAnchor={'left'}
              />
            );
          });
        })}
        {resumeTypesList.map((typeArrow) => {
          return resumeContents.map((contentArrow, index) => {
            console.log(typeArrow, contentArrow);
            return (
              <Xarrow
                key={`${typeArrow}-${index}`}
                start={`type-${typeArrow}`}
                end={`content-${index}`}
                color={
                  year.toString().includes(contentArrow.toString()) &&
                  type.includes(typeArrow)
                    ? 'red'
                    : 'black'
                }
                showHead={false}
                strokeWidth={
                  year.toString().includes(contentArrow.toString()) &&
                  type.includes(typeArrow)
                    ? 1.9
                    : 1.4
                }
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
