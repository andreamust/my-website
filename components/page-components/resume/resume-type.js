import { parseData } from '../../utils/filtering';
import { motion } from 'framer-motion';

function ResumeType(props) {
  return (
    <div className="flex-1 p-14 h-full flex flex-col justify-center gap-9">
      {props.types.map((type, index) => {
        return (
          <motion.div
            key={index}
            id={`type-${type}`}
            className={`w-12 h-12 text-center rounded-full  ${
              props.type.includes(type)
                ? 'bg-cerise text-whitepalette'
                : 'bg-greypalette-600'
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
                props.typeHandler([type]);
                props.yearHandler(
                  parseData(props.data, 'type', type, 'yearStart')
                );
              }}
            >
              <p className="text-center dark:text-blackpalette-900">{type}</p>
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}

export default ResumeType;
