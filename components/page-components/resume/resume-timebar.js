import { Fragment } from 'react';
import { parseData } from '../../utils/filtering';

function ResumeTimebar(props) {
  return (
    <div className=" p-14 flex-none h-full basis-2 flex flex-col justify-evenly">
      {props.years.map((year) => {
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
                  props.yearHandler([year]);
                  props.typeHandler(
                    parseData(props.data, 'yearStart', year, 'type')
                  );
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
