import { motion } from 'framer-motion';
import WindowTopBar from './window-topbar';

function BasicWindow(props) {
  const width = `w-[${props.width || '100%'}]`;
  const height = `min-h-[${props.width || '100%'}]`;
  return (
    <motion.div
      className={'flex flex-col' + `${width} ${height}`}
      animate={{ y: '5vh', x: '4vw', scale: 1 }}
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      initial={{ y: 0, x: 0, scale: 0 }}
      transition={{ duration: 0.4, ease: 'easeIn', delay: 0.5 }}
    >
      <div
        className={`order-last flex flex-col w-full ${height} rounded-b-md bg-slate-800`}
      >
        <p></p>
      </div>
      <WindowTopBar title={props.title} />
      <div className="h-5/6 rounded-md">{props.children}</div>
    </motion.div>
  );
}

export default BasicWindow;
