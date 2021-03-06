import { motion } from 'framer-motion';
import WindowTopBar from './window-topbar';
import { useState } from 'react';

function BasicWindow(props) {
  let [width, setWidth] = useState(props.width || 'w-[100%]');
  let [height, setHeight] = useState(props.height || 'h-[100%]');
  // console.log(useWindowDimensions());

  if (props.animate === true) {
    return (
      <motion.div
        drag
        dragConstraints={{ left: 10, right: 370, top: 10, bottom: 350 }}
        dragMomentum={false}
        // onDrag={(event, info) => console.log(info.point.x, info.point.y)}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        className={`flex flex-col ${width} ${height} shadow-xl ${
          props.openState === true ? 'invisible' : 'visible'
        }`}
        animate={{ x: 100, y: 100 }}
        transition={{ type: 'spring', stiffness: 100 }}
        initial={{ x: 0, y: 0 }}
      >
        <motion.div
          className={`h-full order-last flex flex-col w-full rounded-b-md`}
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
          openHandler={props.openHandler}
          openState={props.openState}
        />
      </motion.div>
    );
  } else {
    return (
      <div
        className={`flex flex-col ${width} ${height} overflow-y-scroll overflow-x-hidden`}
      >
        <div className={`h-full order-last flex flex-col w-full rounded-b-md`}>
          {props.children}
        </div>
      </div>
    );
  }
}

export default BasicWindow;
