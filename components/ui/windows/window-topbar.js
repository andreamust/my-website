import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

function WindowTopBar(props) {
  return (
    <div className="flex flex-row bg-slate-200 h-1/6 rounded-t-md text-center text-base justify-between align-middle">
      <div className="flex-auto">{props.title}</div>
      <div className="flex flex-row left-0 basis-1/12 self-center px-2">
        <motion.div
          className="flex-none bg-green-600 h-4 w-4 rounded-2xl self-end mx-[2px]"
          whileHover={{
            scale: 1.05,
            boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)',
            transition: { duration: 0.1, ease: 'easeIn' },
          }}
        ></motion.div>
        <motion.div
          className="flex-none bg-yellow-300 h-4 w-4 rounded-2xl self-end mx-[2px]"
          whileHover={{
            scale: 1.05,
            boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)',
            transition: { duration: 0.1, ease: 'easeIn' },
          }}
        ></motion.div>
        <motion.div
          className="flex-none bg-red-600 h-4 w-4 rounded-2xl self-end mx-[2px]"
          whileHover={{
            scale: 1.05,
            boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)',
            transition: { duration: 0.1, ease: 'easeIn' },
          }}
        ></motion.div>
      </div>
    </div>
  );
}

export default WindowTopBar;
