import { Fragment } from 'react';
import { parseData } from '../../utils/filtering';
import { motion } from 'framer-motion';

function ResumeTimebar(props) {
  return (
    <div className="flex-1 p-14 h-full basis-2 flex flex-col justify-evenly gap-2">
      {props.years.map((year) => {
        return (
          <Fragment key={year}>
            <motion.div
              id={`year-${year}`} // zomm on hover and animate on click
              className={`flex-1 w-12 max-h-12 text-center align-middle rounded-full  ${
                props.year.toString().includes(year.toString())
                  ? ' bg-lime'
                  : ' bg-greypalette-600'
              }`}
              // on hover bounce
              whileHover={{
                scale: 1.15,
                transition: {
                  duration: 0.15,
                  ease: 'easeOut',
                  type: 'spring',
                  stiffness: 400,
                  damping: 10,
                },
              }}
              // on click bounce
              whileTap={{
                scale: 1,
                transition: {
                  duration: 0.15,
                  ease: 'easeOut',
                  type: 'spring',
                  stiffness: 400,
                  damping: 10,
                },
              }}
              // on focus bounce
              whileFocus={{ scale: 1 }}
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
                <p className="text-center dark:text-blackpalette-900">{year}</p>
              </button>
            </motion.div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default ResumeTimebar;
