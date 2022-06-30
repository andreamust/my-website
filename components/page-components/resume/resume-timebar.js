import { Fragment } from 'react';
import Separator from '../../ui/timeline/separator.js';
import { useEffect, useRef, useState } from 'react';

function ResumeTimebar(props) {
  const ticks = { 2022: 1, 2021: 2, 2020: 3, 2019: 4, 2018: 5, 1993: 6 };
  const strokeColor = function (year) {
    return year === props.year || (parseInt(year) - 1).toString() === props.year
      ? 'stroke-red-400'
      : 'stroke-gray-600';
  };

  const boxRef = useRef();

  // X
  const [x, setX] = useState();

  // Y
  const [y, setY] = useState();

  return (
    <div className="absolute flex-none h-full basis-2 flex flex-col justify-evenly">
      {Object.keys(ticks).map((tick, index) => {
        return (
          <Fragment key={index}>
            {index != 0 ? (
              <Separator color={strokeColor(tick)} width={2} />
            ) : null}
            <div
              ref={boxRef}
              className={`flex-1 w-12 h-12 text-center rounded-full ${
                props.year.toString() === tick ? ' bg-red-300' : ' bg-green-400'
              }`}
            >
              <button onClick={() => props.yearHandler(tick)}>
                <p className="h-12 text-center">{tick}</p>
              </button>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default ResumeTimebar;
