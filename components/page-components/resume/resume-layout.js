import ResumeTimebar from './resume-timebar';
import ResumeContent from './resume-content';
import ResumeType from './resume-type';
import { useState, useEffect, useLayoutEffect } from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';
import { parseData, getResumeSet } from '../../utils/filtering';
import { useTheme } from 'next-themes';

// const useIsomorphicLayoutEffect =
//   typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function ResumeLayout(props) {
  const resume = props.resume;

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  let darkMode = currentTheme === 'dark' ? true : false;

  // get resume elements
  const resumeContents = resume.map((c) => c.content);
  const resumeTypesList = getResumeSet(resume, 'type').sort().reverse();
  const resumeYearsList = getResumeSet(resume, 'yearStart').sort().reverse();

  // initialize state variables
  let [yearSelected, setYear] = useState([resumeYearsList[0]]);
  let [typeSelected, setType] = useState(
    parseData(resume, 'yearStart', yearSelected, 'type')
  );

  let contentId = resume.map((c, idx) => {
    if (c.yearStart === yearSelected[0] && c.type.includes(typeSelected[0])) {
      return `content-${idx}`;
    }
  });
  contentId = contentId.filter((c) => c !== undefined)[0];

  useEffect(() => {
    const handleClickScroll = () => {
      const element = document.getElementById(contentId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    handleClickScroll();
  }, [contentId]);

  return (
    <div className="fixed flex md:flex-row h-full gap-5 lg:gap-52 w-screen">
      <Xwrapper>
        <div className="flex-1 flex flex-row gap-5 lg:gap-52 justify-evenly">
          <ResumeTimebar
            data={resume}
            years={resumeYearsList}
            year={yearSelected}
            yearHandler={setYear}
            typeHandler={setType}
          />
          <ResumeType
            data={resume}
            types={resumeTypesList}
            type={typeSelected}
            typeHandler={setType}
            yearHandler={setYear}
          />
        </div>
        <ResumeContent data={resume} year={yearSelected} type={typeSelected} />
        {resumeYearsList.map((yearArrow) => {
          return resumeTypesList.map((typeArrow) => {
            return (
              <Xarrow
                key={`${yearArrow}-${typeArrow}`}
                start={`year-${yearArrow}`}
                end={`type-${typeArrow}`}
                color={
                  Array.from(yearSelected).includes(yearArrow) &&
                  typeSelected.includes(typeArrow)
                    ? '#C92CAC'
                    : darkMode
                    ? '#FFFDFD'
                    : '#0C0E07'
                }
                curveness={0}
                showHead={false}
                strokeWidth={
                  Array.from(yearSelected).includes(yearArrow) &&
                  typeSelected.includes(typeArrow)
                    ? 1.9
                    : 1.4
                }
                startAnchor={'right'}
                endAnchor={'left'}
                dashness={
                  Array.from(yearSelected).includes(yearArrow) &&
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
                  Array.from(yearSelected).includes(yearStart) &&
                  typeSelected.includes(singleType)
                    ? '#C92CAC'
                    : darkMode
                    ? '#FFFDFD'
                    : '#0C0E07'
                }
                curveness={0.25}
                showHead={false}
                strokeWidth={
                  Array.from(yearSelected).includes(yearStart) &&
                  typeSelected.includes(singleType)
                    ? 1.9
                    : 1.4
                }
                startAnchor={'right'}
                endAnchor={'left'}
                dashness={
                  Array.from(yearSelected).includes(yearStart) &&
                  typeSelected.includes(singleType)
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
