import { motion } from 'framer-motion';
import WindowTopBar from './window-topbar';
import { useState } from 'react';

function BasicWindow(props) {
  let [width, setWidth] = useState(props.width || 'w-[100%]');
  let [height, setHeight] = useState(props.height || 'h-[100%]');

  if (props.animate === true) {
    return (
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragMomentum={true}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        className={`fixed flex flex-col z-50 ${width} ${height} shadow-xl`}
        transition={{ type: 'spring', stiffness: 100 }}
        initial={{ x: 0, y: 0 }}
      >
        <motion.div
          className={`h-full order-last flex flex-col w-full rounded-b-md bg-whitepalette dark:bg-greypalette-600 shadow-2xl`}
        >
          {props.children}
        </motion.div>
        <WindowTopBar
          title={props.title}
          currentWidth={width}
          baseWidth={props.width}
          widthHandler={setWidth}
          currentHeight={height}
          baseHeight={props.height}
          heightHandler={setHeight}
          closePath={props.closePath}
          showTerminal={props.showTerminal}
        />
      </motion.div>
    );
  } else {
    return (
      <div
        className={`flex flex-col ${width} ${height} overflow-y-scroll overflow-x-hidden no-scrollbar`}
      >
        <div className={`h-full w-full order-last flex flex-col rounded-b-md`}>
          {props.children}
        </div>
      </div>
    );
  }
}

export default BasicWindow;
