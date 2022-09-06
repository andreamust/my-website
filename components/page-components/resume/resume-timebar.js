import { Fragment } from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';

function ResumeTimebar(props) {
  let positions = props.positions;

  const years = props.data;

  return (
    <div className="sticky flex-none h-full basis-2 flex flex-col justify-evenly">
      {years.map((year) => {
        return (
          <Fragment key={year}>
            <div
              id={`year-${year}`}
              className={`flex-1 w-12 max-h-12 text-center rounded-full ${
                props.year.toString().includes(year.toString())
                  ? ' bg-red-300'
                  : ' bg-green-400'
              }`}
            >
              <button
                onClick={() => {
                  props.yearHandler(year);
                  console.log(year);
                }}
              >
                <p className="h-12 text-center">{year}</p>
              </button>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default ResumeTimebar;
