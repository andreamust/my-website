import { motion } from 'framer-motion';
import WindowTopBar from './window-topbar';

function BasicWindow(props) {
  let width = `w-[${props.width}]`;
  let height = `h-[${props.height}]`;
  const merda = 'w-[70vw]';
  console.log(width, height);
  if (props.animate === true) {
    return (
      <motion.div
        drag
        dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
        className={`flex flex-col ${merda} ${width} ${height}`}
      >
        <motion.div
          className={` h-[44vh] order-last flex flex-col w-full rounded-b-md bg-slate-800`}
        >
          <div className="h-5/6 rounded-md">{props.children}</div>
        </motion.div>
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
