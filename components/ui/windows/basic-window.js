import { motion } from 'framer-motion';
import WindowTopBar from './window-topbar';

function BasicWindow(props) {
  const width = `w-[${props.width || '100%'}]`;
  const height = `h-[${props.height || '100%'}]`;
  console.log(width, height);
  if (props.animate === true) {
    return (
      <motion.div
        className={`flex flex-col ${width} ${height}`}
        animate={{ y: 0, x: 0, scale: 1 }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        initial={{ y: '5vh', x: '4vw', scale: 0 }}
        transition={{ duration: 0.4, ease: 'easeIn', delay: 0.5 }}
      >
        <div
          className={` h-[44vh] order-last flex flex-col w-full rounded-b-md bg-slate-800`}
        >
          <div className="h-5/6 rounded-md">{props.children}</div>
        </div>
        <WindowTopBar title={props.title} />
      </motion.div>
    );
  } else if (props.animate === false) {
    return (
      <div className={`flex flex-col ${width} ${height}`}>
        <WindowTopBar title={props.title} />
        <div
          className={` h-max order-last flex flex-col w-full rounded-b-md bg-slate-800`}
        >
          <div className="h-5/6 rounded-md">{props.children}</div>
        </div>
      </div>
    );
  }
}

export default BasicWindow;
