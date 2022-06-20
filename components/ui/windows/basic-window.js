import { motion } from 'framer-motion';
import WindowTopBar from './window-topbar';

function BasicWindow(props) {
  let width = props.width || 'w-[100%]';
  let height = props.height || 'h-[100%]';

  if (props.animate === true) {
    return (
      <motion.div
        drag
        dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
        className={`flex flex-col ${width} ${height} max-${height} max-${width} z-20`}
      >
        <motion.div
          className={`order-last flex flex-col w-full rounded-b-md bg-slate-800 ${height}`}
        >
          {props.children}
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
