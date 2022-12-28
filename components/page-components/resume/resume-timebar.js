import { Fragment } from 'react';
import { parseData } from '../../utils/filtering';

function ResumeTimebar(props) {
  return (
    <div className="flex-1 p-14 h-full basis-2 flex flex-col justify-evenly gap-2">
      {props.years.map((year) => {
        return (
          <Fragment key={year}>
            <div
              id={`year-${year}`}
              className={`flex-1 w-12 max-h-12 text-center align-middle rounded-full ${
                props.year.toString().includes(year.toString())
                  ? ' bg-red-400'
                  : ' bg-gray-300'
              }`}
            >
              <button
                className="h-full w-full"
                onClick={() => {
                  props.yearHandler([year]);
                  props.typeHandler(
                    parseData(props.data, 'yearStart', year, 'type')
                  );
                }}
              >
                <p className="text-center">{year}</p>
              </button>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default ResumeTimebar;
