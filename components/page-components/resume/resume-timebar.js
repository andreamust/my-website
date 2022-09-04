import { Fragment } from 'react';
import Separator from '../../ui/timeline/separator.js';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';

function ResumeTimebar(props) {
  let positions = props.positions;

  const ticks = props.data;
  console.log(ticks);
  //const strokeColor = function (year) {
  //  return year === props.year || (parseInt(year) - 1).toString() === props.year
  //    ? 'stroke-red-400'
  //    : 'stroke-gray-600';
  //};

  //{index != 0 ? (
  //  <Separator color={strokeColor(tick)} width={2} />
  //) : null}

  return (
    <Xwrapper>
      <div className="sticky flex-none h-full basis-2 flex flex-col justify-evenly">
        {ticks.map((tick, index) => {
          console.log(tick, index);
          return (
            <Fragment key={tick}>
              <div
                id={`box`}
                className={`flex-1 w-12 max-h-12 text-center rounded-full ${
                  props.year === tick ? ' bg-red-300' : ' bg-green-400'
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
      <Xarrow start={'comp1'} end={'comp2'} />
    </Xwrapper>
  );
}

export default ResumeTimebar;
