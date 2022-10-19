import ResumeTimebar from './resume-timebar';
import ResumeContent from './resume-content';
import ResumeType from './resume-type';
import { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import { motion } from 'framer-motion';

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
  return data.filter((d) => d[type].toString().includes(value.toString())); // TODO: change toString()
}

function parseData(data, type, value, targetValue) {
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
  let [yearSelected, setYear] = useState(resumeYearsList[0]);
  let [typeSelected, setType] = useState([
    parseData(resume, 'yearStart', yearSelected, 'type'),
  ]);

  // update state variables
  useEffect(() => {
    setType(parseData(resume, 'yearStart', yearSelected, 'type'));
  }, [yearSelected]);

  console.log('yearSelected', yearSelected);

  return (
    <div className="absolute flex md:flex-row h-full pb-32 gap-48 w-screen">
      <Xwrapper>
        <div className="flex flex-row gap-52">
          <ResumeTimebar
            data={resumeYearsList.sort().reverse()}
            year={yearSelected}
            yearHandler={setYear}
          />
          <ResumeType
            data={resumeTypesList.sort().reverse()}
            type={typeSelected}
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
                  yearSelected.toString().includes(yearArrow.toString()) && //TODO: change toString()
                  typeSelected.includes(typeArrow)
                    ? 'red'
                    : 'black'
                }
                curveness={0}
                showHead={false}
                strokeWidth={
                  yearSelected.toString().includes(yearArrow.toString()) && //TODO: change toString()
                  typeSelected.includes(typeArrow)
                    ? 1.9
                    : 1.4
                }
                startAnchor={'right'}
                endAnchor={'left'}
                dashness={
                  yearSelected.toString().includes(yearArrow.toString()) &&
                  typeSelected.includes(typeArrow)
                    ? true
                    : false
                }
              />
            );
          });
        })}
        {resume.map((resumeEntry, index) => {
          const { title, type, yearStart, yearEnd, company, content } =
            resumeEntry;
          return type.map((singleType) => {
            return (
              <Xarrow
                key={`${singleType}-${index}`}
                start={`type-${singleType}`}
                end={`content-${index}`}
                color={
                  yearSelected.toString().includes(yearStart.toString()) &&
                  type.includes(singleType)
                    ? 'red'
                    : 'black'
                }
                curveness={0.25}
                showHead={false}
                strokeWidth={
                  yearSelected.toString().includes(yearStart.toString()) &&
                  type.includes(singleType)
                    ? 1.9
                    : 1.4
                }
                startAnchor={'right'}
                endAnchor={'left'}
                dashness={
                  yearSelected.toString().includes(yearStart.toString()) &&
                  type.includes(singleType)
                    ? true
                    : false
                }
              />
            );
          });
        })}
      </Xwrapper>
    </div>
  );
}

export default ResumeLayout;
